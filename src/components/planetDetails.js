import React, { Component } from 'react'
import GenPlanets from '../classes/generate-planets'
import StellarData from '../data/stellarData'

export default class StarSystem extends Component {
    constructor(props) {
        super(props)       
    }

    componentWillMount() {
        this.setState({"planetData": ""})
    }

    componentDidMount() {
    }

    render () {
        const divStyle = {
            'paddingTop': '10px',
            'paddingBottom': '10px',
            'paddingLeft': '10px',
            'textAlign': 'left'
        }
        const tableStyle = {
            color: 'black',
            'borderSpacing': '0px'
        }
        return (
            <div>
                <button onClick={this.showPlanetDetails.bind(this)}>Details</button>
            </div>
        )
    }
    showPlanetDetails() {
        //console.log(JSON.stringify(this.props.planetData, null, 2))
    }
}