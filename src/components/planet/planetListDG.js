import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ReactDataGrid from 'react-data-grid'
import GenPlanets from '../../classes/generate-planets'
import {StarSystem} from '../starSystem/index'
import Menu from '../menu'

class LinkFormatter extends Component {
    render() {
        if (this.props.value.valid) {
            return (
                <div>
                    <Link to={'planets/'+this.props.value.orbit}>{this.props.value.name}</Link>
                </div>
            )
        } else {
            const divStyle = {
                paddingLeft: '10px'
            }
            return (
                <div style={divStyle}>
                    {this.props.value.name}
                </div>
            )
        }
    }
}

class FloatingPointFormatter extends Component {
    render() {
        let value = this.props.value
        let output = ''
        if (isNaN(value) || value === '') {
            output = ''
        } else {
            let precision = 4
            if (value <= -10) {
                precision = 4
            } else if (value < 1) {
                precision = 3
            }
            output = this.formatDecimal(value, precision)
        } 
        const cellStyle = {
            textAlign: 'center'
        }
        return (
            <div style={cellStyle}>
                {output}
            </div>
        )
    }

    formatDecimal(value, precision) {
        return Number(value).toPrecision(precision);
    }
}

export default class PlanetListDG extends Component {
    state = {
        planetDataLoaded: false,
        systemData: '',
        planets: [],
        planetCount: 0,
        showMoons: false
    }
    constructor(props) {
        super(props)
        this._columns = [

            {
                key: 'orbit',
                name: 'Orbit',
                cellClass: 'cellCenter',
                width: 60
            }, {
                key: 'link',
                name: 'Name',
                cellClass: 'cellLeft',
                formatter: LinkFormatter,
                width: 120
            }, {
                key: 'zone',
                name: 'Zone',
                cellClass: 'cellLeft',
                width: 100
            }, {
                key: 'planetType',
                name: 'Type',
                cellClass: 'cellLeft',
                width: 120
            }, {
                key: 'radius',
                name: 'Radius',
                cellClass: 'cellRight',
                width: 80
            }, {
                key: 'atmosphere',
                name: 'Atmo',
                cellClass: 'cellLeft',
                width: 150
            }, {
                key: 'water',
                name: 'Hydro',
                cellClass: 'cellLeft',
                width: 60
            }, {
                key: 'temperature',
                name: 'Temp',
                cellClass: 'cellRight',
                formatter: FloatingPointFormatter,
                width: 90
            }, {
                key: 'period',
                name: 'Period',
                cellClass: 'cellRight',
                formatter: FloatingPointFormatter,
                width: 90
            }, {
                key: 'gravity',
                name: 'Gravity',
                cellClass: 'cellRight',
                formatter: FloatingPointFormatter,
                width: 90
            }, {
                key: 'moons',
                name: 'Moons',
                cellClass: 'cellRight',
                width: 60
            }
        ]
    }

    componentWillMount() {}

    componentDidMount() {
        this.loadPlanets()
    }

    render() {
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
            }
        ]
        const divStyle = {
            width: '1110px'
        }
        var systemDetails = this.displaySystemDetails()
        if (!this.state.planetDataLoaded) {
            return (
                <div>
                    <Menu menus={menus} />
                    <h1>No Planet Data Loaded</h1>
                    <br/> {systemDetails}
                    <button onClick={this.generatePlanets.bind(this)}>Generate Planets</button>
                </div>
            )
        } else {
            let toggleMoonText = this.state.showMoons ? 'Hide Moons' : 'Show Moons'
            return (
                <div style={divStyle}>
                    <Menu menus={menus} />
                    {systemDetails}
                    <br/>
                    <div className='indentDiv4'>
                        <button onClick={this.toggleMoons.bind(this)}>{toggleMoonText}</button>
                        <button onClick={this.resetPlanets.bind(this)}>Reset Planets</button>
                        <ReactDataGrid
                            columns={this._columns}
                            rowGetter={this.rowGetter}
                            rowsCount={this.state.planetCount}
                            minHeight={500}/>
                    </div>
                </div>
            )
        }
    }

    displaySystemDetails = (props) => {
        if (this.state.systemData === '') {
            return (
                <div>
                    <h1>Loading System Details</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>{this.state.systemData.name}</h1>
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
                                <StarSystem
                                    key={this.props.match.params.star}
                                    starSystem={this.state.systemData}
                                    galaxy={this.props.match.params.id}/>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }

    toggleMoons = () => {
        this.setState({showMoons: !this.state.showMoons})
        this.loadPlanets()
    }

    resetPlanets = () => {
        this.setState({planetDataLoaded: false})
        this.props.db.collection('planets')
            .doc(this.props.match.params.star).delete()
            
        let systemRef = this.props.db.collection('starSystems').doc(this.props.match.params.star)
            systemRef.set({planetsRef: null}, {merge: true})
    }

    loadPlanets = () => {
        let starSystemRef = this.props.db.collection('starSystems').doc(this.props.match.params.star)
        let galaxyRef = this.props.db.collection('galaxies').doc(this.props.match.params.id)
        let planetsRef = this.props.db.collection('planets')
        let planets = []
        this.setState({
            galaxyRef: galaxyRef, 
            starSystemRef: starSystemRef
        })
        starSystemRef.get()
            .then(s => {
                this.setState({
                    systemData: s.data().star
                })

                planetsRef.doc(this.props.match.params.star).get()
                    .then(query => {
                        if (query.exists) {
                            let planetData = query.data()
                            
                            for (let i = 0; i < planetData.planets.maxOrbits; i++) {
                                planets.push(this.mapPlanetsToDataGrid(planetData.planets.orbitData.orbits[i]))
                                if (this.state.showMoons 
                                    && planetData.planets.orbitData.orbits[i].details
                                    && planetData.planets.orbitData.orbits[i].details.moonCount
                                    && planetData.planets.orbitData.orbits[i].details.moonCount > 0) {
                                    for (let j = 0; j < planetData.planets.orbitData.orbits[i].details.moonCount; j++) {
                                        planets.push(this.mapMoonsToDataGrid(planetData.planets.orbitData.orbits[i].moons[j]))
                                    }
                                    //planets.push(this.mapMoopnsToDataGrid)
                                }
                            }
                            this.setState({
                                planets: planets, 
                                planetCount: planets.length, 
                                planetDataLoaded: true
                            })
                        }
                    })
            })
    }

    generatePlanets = () => {
        let options = {
            sol: false
        }
        let planets = []
        let name = this.state.systemData.name
        let rawPlanetData = GenPlanets.generatePlanetaryBodies(name, this.state.systemData.primaryStar, options)
        let planetData = GenPlanets.generateMoons(rawPlanetData, options)

        for (let p = 0; p < planetData.orbitData.orbits.length; p++) {
            if (planetData.orbitData.orbits[p].orbitType === 'AsteroidBelt') {
                GenPlanets.generateAsteroidBelt(p, planetData)
            }
        }

        this.props.db.collection('planets')
            .doc(this.props.match.params.star)
            .set({planets: planetData})
            .then(ref => {
                for (let i = 0; i < planetData.maxOrbits; i++) {
                    planets.push(this.mapPlanetsToDataGrid(planetData.orbitData.orbits[i]))
                    if (this.state.showMoons 
                        && planetData.orbitData.orbits[i].details
                        && planetData.orbitData.orbits[i].details.moonCount
                        && planetData.orbitData.orbits[i].details.moonCount > 0) {
                        for (let j = 0; j < planetData.orbitData.orbits[i].details.moonCount; j++) {
                            planets.push(this.mapMoonsToDataGrid(planetData.orbitData.orbits[i].moons[j]))
                        }
                    }
                }
                let planetsRef = this.props.db.collection('planets').doc(this.props.match.params.star)
                let systemRef = this.props.db.collection('starSystems').doc(this.props.match.params.star)
                systemRef.set({planetsRef: planetsRef}, {merge: true})

                this.setState({
                    planets: planets, 
                    planetCount: planets.length, 
                    planetDataLoaded: true
                })
            })
    }

    mapMoonsToDataGrid = (moonData, orbit) => {
        let moon = {
            name: moonData.name,
            link: {
                star: this.state.systemData.id,
                orbit: orbit,
                name: moonData.name,
                valid: false
            },
            orbit: '',
            zone: '',
            planetType: 'Moon'
        }
        if (moonData.physics) {
            moon.radius = moonData.physics.radius
            moon.atmosphere = moonData.atmosphere
            moon.water = moonData.hydrographics
            moon.temperature = moonData.temperature
            moon.period = moonData.physics.period
            moon.gravity = moonData.physics.gravity
            moon.moons = ''
        }

        return moon
    }

    mapPlanetsToDataGrid = (planetData) => {
        let planet = {
            name: planetData.name,
            link: {
                star: this.state.systemData.id,
                orbit: planetData.orbit,
                name: planetData.name,
                valid: true
            },
            orbit: planetData.orbit,
            zone: planetData.orbitZone,
            planetType: planetData.orbitType
        }
        if (planetData.details) {
            planet.radius = planetData.details.radius
            planet.atmosphere = planetData.details.atmosphere
            planet.water = planetData.details.hydrographics
            planet.temperature = planetData.details.temperature
            planet.period = planetData.details.physics.period
            planet.gravity = planetData.details.physics.gravity
            planet.moons = planetData.details.moonCount > 0 ? planetData.details.moonCount : 'None'
        }

        return planet
    }

    rowGetter = (i) => {
        return this.state.planets[i]
    }
}