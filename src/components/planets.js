import React, { Component } from 'react'
import GenPlanets from '../classes/generate-planets'
import StellarData from '../data/stellarData'
import StarAstronomics from './starAstronomics'
import PlanetDetails from './planetDetails'

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
//(this.state.planetData.orbitData.orbits[j].temperate > 100) ? {color: 'red'} : ''
        if (this.props.starData == null) {
            return (
                <div className='container' style={divStyle}>
                    <h1>No System loaded</h1>
                </div>
            )    
        } else {
            console.log("state", JSON.stringify(this.state, null, 2))
            if (this.state.planetData == "") {
                return (
                    <div>
                        <h1>No Planets Loaded</h1>
                        <button onClick={this.addPlanets.bind(this)}>Add Planets</button>
                    </div>
                )
            } else {
                let orbitData = this.state.planetData.orbitData
                return (
                    <div className='container' style={divStyle}>
                        <button onClick={this.addPlanets.bind(this)}>Add Planets</button>
                        <br/>
                        <div>
                            <table className="Board" style={tableStyle}>
                                <tbody>
                                    <tr>
                                        <th>Orbit</th>
                                        <th>Zone</th>
                                        <th>Type</th>
                                        <th>Radiius</th>
                                        <th>Atmosphere</th>
                                        <th>Temperature</th>
                                        <th>Moons</th>
                                    </tr>
                                    {Array.apply(0, Array(this.state.planetData.orbitData.orbits.length)).map((x, j) =>
                                        <tr key={j}>
                                            <td>
                                                {j}
                                            </td>
                                            <td>
                                                {this.state.planetData.orbitData.orbits[j].orbitZoneCode}
                                            </td>
                                            <td>
                                                {this.state.planetData.orbitData.orbits[j].orbitType}
                                            </td>
                                            <td>
                                                {this.state.planetData.orbitData.orbits[j].details && this.state.planetData.orbitData.orbits[j].details.radius}
                                            </td>
                                            <td>
                                                {this.state.planetData.orbitData.orbits[j].details && this.state.planetData.orbitData.orbits[j].details.atmosphere}
                                            </td>
                                            {console.log(JSON.stringify(this.state.planetData.orbitData.orbits[j].details, null, 2))}
                                            <td style={(this.state.planetData.orbitData.orbits[j].details 
                                                && this.state.planetData.orbitData.orbits[j].details.temperature > 100.0) ? {color: 'red'} : {color: 'blue'}}>
                                                {this.state.planetData.orbitData.orbits[j].details 
                                                    && this.state.planetData.orbitData.orbits[j].details.temperature}
                                            </td>
                                            <td>
                                                {this.state.planetData.orbitData.orbits[j].details && this.state.planetData.orbitData.orbits[j].details.moons}
                                            </td>
                                            <td>
                                                <PlanetDetails planetData={this.state.planetData.orbitData.orbits[j]} />
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            }
        }
    }

    
    addPlanets() {
        //console.log(JSON.stringify(this.props.starData, null, 2))
        let options = {
            sol: true
        }
        GenPlanets.generatePlanetaryBodies(this.props.starData, options, (planetData) => {
            //console.log(JSON.stringify(planetData, null, 2))
            this.setState({ "planetData" : planetData })
        })
    }
}
