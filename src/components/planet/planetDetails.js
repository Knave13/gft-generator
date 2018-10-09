import React, {Component} from 'react'
import Menu from '../menu'
import {Moon, Terrain} from './index'

export default class PlanetDetails extends Component {
    state = {
        planetData: ''
    }
    componentWillMount() {
    }

    componentDidMount() {
        let planetRef = this.props.db.collection('planets').doc(this.props.match.params.star)

        this.setState({planetRef: planetRef})
        planetRef.get()
            //.orderBy('name').get()
            .then(p => {
                this.setState({planetData: p.data()})
            })
    }

    render() {
        const divStyle = {
            'float': 'left',
            'width': '600px',
            'paddingTop': '10px',
            'paddingBottom': '10px',
            'paddingLeft': '150px',
            'textAlign': 'left'
        }
        const tableStyle = {
            color: 'black',
            'borderSpacing': '0px'
        }
        const divStyleLeft = {
            width: '300px',
            float: 'left'
        }
        const divStyleRight = {
            width: '300px',
            marginLeft: '320px'
        }
        let menus = [
            {
                url: '/',
                name: 'Home'
            },
            {
                url: '/galaxy',
                name: 'Galaxies'
            },
            {
                url: '/galaxy/' + this.props.match.params.id + '/starSystems',
                name: 'Star Systems'
            },
            {
                url: '/galaxy/' + this.props.match.params.id + '/starSystems/' + this.props.match.params.star + '/planets',
                name: 'Planet List'
            }
        ]
        if (this.state.planetData === '') {
            return (
                <div>
                    <Menu menus={menus} />
                    <br />
                    Loading Orbit {this.props.match.params.planet}...
                </div>
            )
        } else {
            let orbit = this.props.match.params.orbit
            //let planetData = {name: 'foo', orbitType: 'planet', orbitZone:'outer'}
            let planetData = this.state.planetData.planets.orbitData.orbits[orbit]
            if (!planetData.moons) {
                planetData.moons = []
            }
            let terrainData = {
                orbitType: planetData.orbitType,
                terrainData: 'None'
            }
            if (planetData.orbitType === 'Planet') {
                terrainData = {
                    orbitType: 'Planet',
                    terrainData: planetData.details.albedoData
                }
            }
            console.log(JSON.stringify(terrainData, null, 2))
            return (
                <div>
                    <Menu menus={menus} />
                    <br />
                    <div style={divStyle}>
                        Orbit {orbit}
                        <br />
                        <div style={divStyleLeft}>
                            Name: {planetData.name}<br/>
                            Type: {planetData.orbitType}<br/>
                            Zone: {planetData.orbitZone}<br/>
                        </div>
                        <div style={divStyleRight}>
                            <Terrain terrain={terrainData} />
                        </div>
                    </div>
                    <div style={divStyle}>
                        <table className="Board" style={tableStyle}>
                            <tbody>
                                <tr>
                                    <th width="50px">Id</th>
                                    <th width="125px">Radius</th>
                                    <th width="125px">Atmo</th>
                                    <th width="125px">Hydro</th>
                                    <th width="125px">Temp</th>
                                    <th width="125px">Gravity</th>
                                    <th width="125px">Orbit</th>
                                </tr>
                                {planetData.moons.map((item, i) =>
                                    <Moon key={i} id={i + 1} data={item}/>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }
}