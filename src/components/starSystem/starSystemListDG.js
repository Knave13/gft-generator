import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ReactDataGrid from 'react-data-grid'
import NameGen from '../../classes/generate-name'
import StarGen from '../../classes/generate-starsystem'
import Astronomics from '../../data/fileAstronomics'
import StellarData from '../../data/stellarData'
import Menu from '../menu'

class LinkFormatter extends Component {
    render() {
        return (
            <div>
                <Link to={'starSystems/'+this.props.value.id+'/planets'}>{this.props.value.name}</Link>
            </div>
        )
    }
}

export default class StarSystemListDG extends Component {
    state = {
        starSystems: [],
        starCount: 0
    }

    constructor(props) {
        super(props)
        this._columns = [
            { key: 'link', name: 'Name', sortable: true, formatter: LinkFormatter, cellClass: 'cellLeft', width: 150 },
            { key: 'starCode', name: 'Code', sortable: true, width: 80 },
            { key: 'starType', name: 'Type', sortable: true, width: 100 },
            { key: 'starSize', name: 'Size', sortable: true, width: 150 },
            { key: 'luminosity', name: 'Lum', width: 100 },
            { key: 'magnitude', name: 'Mag', width: 100 },
            { key: 'mass', name: 'Mass', width: 100 },
            { key: 'radii', name: 'Radii', width: 100 },
            { key: 'temperature', name: 'Temp', width: 100 },
            { key: 'generated', name: 'Gen', width: 60 }
        ]
    }

    componentWillMount() {
    }

    componentDidMount() {
        let starSystemsRef = this.props.db.collection('starSystems')
        let galaxyRef = this.props.db.collection('galaxies').doc(this.props.match.params.id)
        let starSystems = []
        this.setState({galaxyRef: galaxyRef})
        starSystemsRef.where('galaxyRef', '==', galaxyRef).get()
            //.orderBy('name').get()
            .then(query => {
                query.forEach(x => {
                    starSystems.push(this.mapStarToDataGrid(x.id, x.data()))
                })
                this.setState({
                    starSystems: starSystems,
                    sortedRows: starSystems.slice(0),
                    starCount: query.size
                })
            })
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
            }
        ]
        const divStyle = {
            width: '1060px'
        }
        if (this.state.starSystems === '') {
            return (
                <div>
                    <Menu menus={menus} />
                    <h1>Star System list</h1>
                    <br/>
                    Loading...
                </div>
            )
        } else {
            return (
                <div style={divStyle}>
                    <Menu menus={menus} />
                    <h1>Star System list</h1>
                    <button onClick={this.generateStarSystem.bind(this)}>New Star System</button>
                    <div className='indentDiv4'>
                        <ReactDataGrid
                            onGridSort={this.handleGridSort}
                            columns={this._columns} 
                            rowGetter={this.rowGetter} 
                            rowsCount={this.state.starCount} 
                            minHeight={500} />
                    </div>
                </div>
            )
        }
    }
    handleGridSort = (sortColumn, sortDirection) => {
        const comparer = (a, b) => {
            if (sortDirection === 'ASC') {
                return (a[sortColumn].name > b[sortColumn].name) ? 1 : -1;
            } else if (sortDirection === 'DESC') {
                return (a[sortColumn].name < b[sortColumn].name) ? 1 : -1;
            }
        };

        const rows = sortDirection === 'NONE' ? this.state.starSystems.slice(0) : this.state.sortedRows.sort(comparer);

        this.setState({ sortedRows: rows });
    }

    rowGetter = (i) => {
        return this.state.sortedRows[i]
    }

    mapStarToDataGrid(id, starData) {
        let starSystem = starData.star
        let starKey = starSystem.primaryStar.typeCode + starSystem.primaryStar.classification + " " + starSystem.primaryStar.sizeCode
        let friendlyType = StellarData.starTypeColor[starSystem.primaryStar.typeCode]
        let friendlySize = StellarData.starSizeName[starSystem.primaryStar.sizeCode]
        let planetsGenerated = false
        if (starData.planetsRef) {
            planetsGenerated = true
        }
        let star = {
            id: id,
            name: starSystem.name,
            link: {
                id: id,
                name: starSystem.name
            },
            starCode: starKey,
            starType: friendlyType,
            starSize: friendlySize,
            luminosity: starSystem.astronomics.luminosity,
            magnitude: starSystem.astronomics.magnitude,
            mass: starSystem.astronomics.mass,
            radii: starSystem.astronomics.radii,
            temperature: starSystem.astronomics.temperature,
            generated: planetsGenerated === false ? '' : 'Yes'
        }

        return star
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

            this.props.db.collection('starSystems')
                .add({star: star, galaxyRef: this.state.galaxyRef})
                .then(ref => {
                    starSystems.push(this.mapStarToDataGrid(ref.id, star))
                    this.setState({starSystems: starSystems})
                    const rows = this.state.starSystems.slice(0)
                    
                    this.setState({ sortedRows: rows })
                })

            
        })
    }
}