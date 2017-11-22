import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import NameGen from '../classes/generate-name'
import StarGen from '../classes/generate-starsystem'
import Astronomics from '../data/fileAstronomics'

export default class StarSystemList extends Component {
    componentWillMount() {
        this.setState({starSystems: ''})
    }
    componentDidMount() {
        let starSystemsRef = this.props.db.collection('starSystems')
        let galaxyRef = this.props.db.collection('galaxies').doc(this.props.match.params.id)
        let starSystems = []

        console.log('getting star systems')
        console.log('galaxyId', this.props.match.params.id)
        starSystemsRef.where('galaxyId', '==', galaxyRef).get()
            .then(query => {
                query.forEach(x => {
                    starSystems.push({
                        id: x.id,
                        data: x.data()
                    })
                })
                this.setState({starSystems: starSystems})
            })
    }

    render() {
        if (this.state.starSystems === '') {
            return (
                <div>
                    <Link to="/">Go Home</Link>
                    <h1>Star System list</h1>
                    <br/>
                    Loading...
                </div>
            )
        } else {
            return (
                <div>
                    <Link to="/">Go Home</Link>
                    <h1>Star System list</h1>
                    <button onClick={this.generateStarSystem.bind(this)}>New Star System</button>
                    <div>
                        {this.state.starSystems.map((item, i) => 
                            <div key={i}>
                                {item.data.name}
                            </div>    
                        )}
                    </div>
                </div>
            )
        }
    }

    generateStarSystem() {
        NameGen.generateName((name) => {
            let options = {
                sol: false,
                nature: 1
            }
            var star = StarGen.generateStarSystem(this.props.match.params.id, name, options)
            console.log(JSON.stringify(star, null, 2))
            let astroData = Astronomics.findByKey(star.primaryStarKeyCode)
            star.astronomics = astroData
            let starSystems = this.state.starSystems
            starSystems.push({data: star})
            this.setState({starSystems: starSystems})
        })
    }
}