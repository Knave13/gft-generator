import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ReactDataGrid from 'react-data-grid'
import GenPlanets from '../../classes/generate-planets'
import {StarSystem} from '../starSystem/index'

class LinkFormatter extends Component {
    render() {
        return (
            <div>
                <Link to={this.props.value.id}>{this.props.value.name}</Link>
            </div>
        )
    }
}

export default class PlanetListDG extends Component {
    state = {
        planetDataLoaded: false,
        systemData: '',
        planets: [],
        planetCount: 0
    }
    constructor(props) {
        super(props)
        this._columns = [
            { key: 'link', name: 'Name', sortable: true, formatter: LinkFormatter, cellClass: 'cellLeft', width: 150 },
            { key: 'orbit', name: 'Orbit', sortable: true, cellClass: 'cellLeft', width: 80 },
            { key: 'zone', name: 'Zone', sortable: true, cellClass: 'cellLeft', width: 100 },
            { key: 'planetType', name: 'Type', sortable: true, cellClass: 'cellLeft', width: 150 },
            { key: 'radius', name: 'Radius', cellClass: 'cellLeft', width: 100 },
            { key: 'atmosphere', name: 'Atmo', cellClass: 'cellLeft', width: 100 },
            { key: 'temperature', name: 'Temp', cellClass: 'cellLeft', width: 100 },
            { key: 'period', name: 'Period', cellClass: 'cellLeft', width: 100 },
            { key: 'gravity', name: 'Gravity', cellClass: 'cellLeft', width: 100 },
            { key: 'moons', name: 'Moons', cellClass: 'cellLeft', width: 100 }
        ]
    }

    componentWillMount() {
    }

    componentDidMount() {
        let starSystemRef = this.props.db.collection('starSystems').doc(this.props.match.params.star)
        let galaxyRef = this.props.db.collection('galaxies').doc(this.props.match.params.id)
        let planetsRef = this.props.db.collection('planets') 
        let planets = []
        this.setState({
            galaxyRef: galaxyRef,
            starSystemRef: starSystemRef
        })
        planetsRef.where('starSystemRef', '==', starSystemRef).get()
            //.orderBy('name').get()
            .then(query => {
                if (query.size > 0) {
                    query.forEach(x => {
                        planets.push(this.mapPlanetsToDataGrid(x.id, x.data()))
                    })
                    this.setState({
                        planets: planets,
                        planetCount: query.size,
                        planetDataLoaded: true
                    })
                }
            })
        starSystemRef.get()
            .then(s => {
                console.log(JSON.stringify(s.data().star, null, 2))
                this.setState({systemData: s.data().star})
            })
    }

    render() {
        var systemDetails = this.displaySystemDetails()
        if (!this.state.planetDataLoaded) {
            return (
                <div>
                    <h1>No Planet Data Loaded</h1>
                    <br/>
                    {systemDetails}
                    <button onClick={this.generatePlanets.bind(this)}>Generate Planets</button>
                </div>
            )
        } else {
            return (
                <div>
                    {systemDetails}
                    <br />
                    <ReactDataGrid
                        columns={this._columns} 
                        rowGetter={this.rowGetter} 
                        rowsCount={this.state.planetCount} 
                        minHeight={500} />
                </div>
            )
        }
    }

    displaySystemDetails(props) {
        if (this.state.systemData == '') {
            return <h1>Loading System Details</h1>
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
                                <StarSystem key={this.props.match.params.star} starSystem={this.state.systemData} galaxy={this.props.match.params.id} />
                            </tbody>
                        </table>
                    </div>
                </div>)
        }
    }

    generatePlanets() {
        let options = {
            sol: false
        }

        GenPlanets.generatePlanetaryBodies(this.state.systemData.primaryStar, options, (planetData) => {
            this.setState({"planetData": planetData})
            console.log(JSON.stringify(planetData, null, 2))
        })   
    }

    mapStarToDataGrid(id, planetData) {
        let planet = {
            id: id,
            name: this.state.starSystemName
        }

        return planet
    }

    rowGetter = (i) => {
        return this.state.planets[i]
    }
}