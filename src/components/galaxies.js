import React, {Component} from 'react'
import firebase from 'firebase'
import 'firebase/firestore'
import NameGen from '../classes/generate-name'
import StarGen from '../classes/generate-starsystem'
import Astronomics from '../data/astronomics'
import StarSystem from './starSystem'

export default class Galaxies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSize: -1,
            starSystem: null
        }
    }

    componentWillMount() {}

    componentDidMount() {}

    render() {
        const divStyle = {
            'paddingTop': '10px',
            'paddingBottom': '10px'
        }
        return (
            <div className='container' style={divStyle}>
                <h1>Welcome to the GFT Galaxy Generator</h1>
                <br/>
                <button onClick={this.addGalaxy}>Add Galaxy</button>
                <button
                    onClick={this
                    .addStarSystem
                    .bind(this)}>Add Star System</button>
                <button onClick={this.props.addAstronomicalData}>Add Data</button>
                <br/>
                <StarSystem starSystem={this.state.starSystem}/>
            </div>
        )
    }

    addGalaxy() {
        NameGen.generateName((name) => {
            firebase
                .firestore()
                .collection('galaxies')
                .doc()
                .set({name: name, activeIndicator: true, starCount: 0})
        })
    }

    addStarSystem() {
        NameGen.generateName((name) => {
            let options = {
                sol: true,
                nature: 1
            }
            var star = StarGen.generateStarSystem(5, name, options)
            Astronomics.findByKey(this.props.database, star.primaryStarKeyCode, (data) => {
                //console.log('Astronomics', JSON.stringify(data, null, 2))
                star.astronomics = data
                //console.log(JSON.stringify(star, null, 2))
                this.setState({starSystem: star})
            })

            //alert('add starsystem')
        })
    }
}
