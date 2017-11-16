import React, { Component } from 'react'
import GenPlanets from '../classes/generate-planets'
import StellarData from '../data/stellarData'
import StarAstronomics from './starAstronomics'
import PlanetDetails from './planetDetails'
import DataField from './dataField'

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
        const tempOptions = {
            precision: 4,
            units: 'C',
            defaultStyle: {
                'color': 'black'
            },
            styles: [ {
                    val: 0,
                    style: {
                        'color': 'blue'
                    } 
                }, {
                    val: 50,
                    style: {
                        'color': 'green'
                    }
                }, {
                    val: 10000,
                    style: {
                        'color': 'red'
                    }
                }
            ]
        }
        const numberOptions = {
            precision: 4,
            units: '',
            defaultStyle: {
                'color': 'black'
            },
            styles: []
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
                                        <th>Period</th>
                                        <th>Gravity</th>
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
                                            <td>
                                                <DataField options={tempOptions} data={this.state.planetData.orbitData.orbits[j].details 
                                                    && this.state.planetData.orbitData.orbits[j].details.temperature } />
                                            </td>
                                            <td>
                                                <DataField options={numberOptions} data={this.state.planetData.orbitData.orbits[j].details
                                                    && this.state.planetData.orbitData.orbits[j].details.physics.periodDays } />
                                            </td>                                            
                                            <td>
                                            <DataField options={numberOptions} data={this.state.planetData.orbitData.orbits[j].details 
                                                && this.state.planetData.orbitData.orbits[j].details.physics.gravity } />                                            </td>                                            
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
