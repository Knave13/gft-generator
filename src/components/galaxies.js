import React, { Component } from 'react'
import firebase from 'firebase'
import 'firebase/firestore'
import NameGen from '../classes/generate-name'

export default class Galaxies extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            dataSize: -1
        }
    }

    componentWillMount() {
        firebase.firestore().collection('galaxies').get().then((data) => {
            console.log(data)
            this.setState({dataSize: data.size})
        })
    }

    componentDidMount() {

    }

    render () {
        const divStyle = {
            'paddingTop': '10px',
            'paddingBottom': '10px'
        }   
        return (
            <div className='container' style={divStyle}>
                <h1>Welcome to the GFT Galaxy Generator</h1>
                <br/>
                <label id='test'>{this.state.dataSize}</label>
                <button onClick={this.addGalaxy}>Add Galaxy</button>
                <button onClick={this.props.addStarSystem}>Add Star System</button>
                <button onClick={this.props.addAstronomicalData}>Add Data</button>
            </div>
        )
    }

    addGalaxy() {
        NameGen.generateName((name) => {
            firebase.firestore().collection('galaxies').doc().set({
                name: name,
                activeIndicator: true,
                starCount: 0
            }).then((data) => {
                console.log(JSON.stringify(data, null, 2))
            })
        })
        
    }
}
