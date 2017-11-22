import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Galaxy from './galaxy'

export default class GalaxyList extends Component {
    componentWillMount() {
        this.setState({galaxies: ''})
    }
    componentDidMount() {
        let galaxiesRef = this.props.db.collection('galaxies')
        let galaxies = []

        console.log('getting galaxies')
        galaxiesRef
            .get()
            .then(query => {
                query.forEach(x => {
                    galaxies.push({
                        id: x.id,
                        data: x.data()
                    })
                })
                this.setState({galaxies: galaxies})
                console.log('count', galaxies.length)
                console.log(JSON.stringify(galaxies, null, 2))
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
                        {this
                            .state
                            .galaxies
                            .map((item, i) => <Galaxy data={item.data} id={item.id}/>)}
                    </div>

                </div>
            )
        }
    }
}