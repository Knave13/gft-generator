import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Galaxy from './galaxy'

export default class GalaxyList extends Component {
    componentWillMount() {
        this.setState({galaxies: ''})
        this.setState({counts: ''})
    }
    componentDidMount() {
        let galaxiesRef = this.props.db.collection('galaxies')
        let galaxies = []
        let counts = []

        console.log('getting galaxies')
        galaxiesRef
            .get()
            .then(query => {
                query.forEach(x => {
                    galaxies.push({
                        id: x.id,
                        starCount: 0,
                        data: x.data()
                    })
                })
                this.setState({galaxies: galaxies})
                for (var i = 0; i < galaxies.length; i++) {
                    let galaxyRef = this.props.db.collection('galaxies').doc(galaxies[i].id)
                    this.props.db.collection('starSystems')
                        .where('galaxyRef', '==', galaxyRef)
                        .get()
                        .then(g => {
                            counts.push(g.size)
                            this.setState({counts: counts})
                        })
                }
            })
    }

    render() {
        if (this.state.galaxies === '') {
            return (
                <div>
                    <Link to="/">Go Home</Link>
                    <h1>Galaxy list</h1>
                    <br/>
                    Loading...
                </div>
            )
        } else {
            return (
                <div>
                    <Link to="/">Go Home</Link>
                    <h1>Galaxy list</h1>
                    <div>
                        <table className='dataTable'>
                            <tbody>
                                {this.state.galaxies.map((item, i) => 
                                    <Galaxy key={item.id} data={item.data} starCount={this.state.counts[i]} id={item.id}/>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }
}