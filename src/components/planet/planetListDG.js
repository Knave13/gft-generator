import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ReactDataGrid from 'react-data-grid'
import GenPlanets from '../../classes/generate-planets'

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
        starSysytemName: '',
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
                        starSystem: starSystemRef,
                        planets: planets,
                        planetCount: query.size,
                        planetDataLoaded: true
                    })
                }
            })
    }

    render() {
        if (!this.state.planetDataLoaded) {
            return (
                <div>
                    <h1>No Planet Data Loaded</h1>
                    <br/>
                    <button onClick={this.generatePlanets.bind(this)}>Generate Planets</button>
                </div>
            )
        } else {
            return (
                <div>
                    <ReactDataGrid
                        columns={this._columns} 
                        rowGetter={this.rowGetter} 
                        rowsCount={this.state.planetCount} 
                        minHeight={500} />
                </div>
            )
        }
    }

    generatePlanets() {
        // let options = {
        //     sol: false
        // }
        // GenPlanets.generatePlanetaryBodies(this.props.starData, options, (planetData) => {
        //     this.setState({"planetData": planetData})
        // }).then(data => {
        //     console.log(JSON.stringify(data, null, 2))
        // })     
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