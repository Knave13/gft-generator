import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import NameGen from '../classes/generate-name'
import StarGen from '../classes/generate-starsystem'
import Astronomics from '../data/fileAstronomics'
import StarSystem from './starSystem'

export default class StarSystemList extends Component {
    componentWillMount() {
        this.setState({starSystems: ''})
    }
    componentDidMount() {
        let starSystemsRef = this.props.db.collection('starSystems')
        let galaxyRef = this.props.db.collection('galaxies').doc(this.props.match.params.id)
        let starSystems = []
        this.setState({galaxyRef: galaxyRef})
        starSystemsRef.where('galaxyRef', '==', galaxyRef).get()
            .then(query => {
                query.forEach(x => {
                    starSystems.push({
                        id: x.id,
                        data: x.data().star
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
                        <table className='dataTable'>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <th>Code</th>
                                    <th>Type</th>
                                    <th>Size</th>
                                    <th>Lum</th>
                                    <th>Mag</th>
                                    <th>Mass</th>
                                    <th>Radii</th>
                                    <th>Temp</th>
                                </tr>
                                {this.state.starSystems.map((item, i) => 
                                    <StarSystem key={i} starSystem={item} galaxy={this.props.match.params.id} />  
                                )}
                            </tbody>
                        </table>
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
            let astroData = Astronomics.findByKey(star.primaryStarKeyCode)
            star.astronomics = astroData
            let starSystems = this.state.starSystems
            starSystems.push({data: star})
            this.setState({starSystems: starSystems})

            this.props.db.collection('starSystems').doc()
                .set({star: star, galaxyRef: this.state.galaxyRef})
        })
    }
}