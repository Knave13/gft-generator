import React, {Component} from 'react'
import ReactDataGrid from 'react-data-grid'
import GenPlanets from '../../classes/generate-planets'
import StellarData from '../../data/stellarData'
import Astronomics from '../../data/fileAstronomics'
import Menu from '../menu'

export default class TestTemperature extends Component {
    state = {
        dataLoaded: false,
        hydrographics: 70,
        tectonics: 30,
        terrain: {
            checksum: 1.0
        }
    }

    constructor(props) {
        super(props)
        if (props.water) {
            this.setState({ 
                hydrographics: props.water,
                tectonics: props.tectonics
            })
        }
    }

    componentDidMount() {
        this.setState( { dataLoaded: true })
        this.calculateTerrain(this.state.hydrographics, this.state.tectonics)
    }

    render() {
        const menus = [
            {
                url: '/',
                name: 'Home'
            },
            {
                url: '/galaxy/tests',
                name: 'Tests'
            }
        ]
        const outerDivStyle = {
            display: 'inline-block',
            textAlign: 'left',
            paddingRight: '20px'
        }
        const labelStyle = {
            minWidth: '50px',
            textAlign: 'center',
            display: 'inline-block'
        }
        const lineLabel = {
            display: 'inline-block',
            textAlign: 'left',
            ['min-width']: '150px',
            fontSize: '18px'
        }
        const leftLabel = {
            display: 'inline-block',
            textAlign: 'left',
            ['min-width']: '150px',
            fontSize: '18px',
            ['padding-left']: '10px'
        }
        const rightLabel = {
            display: 'inline-block',
            textAlign: 'right',
            ['min-width']: '100px',
            fontSize: '18px'
        }
        if (!this.state.dataLoaded) {
            return (
                <div>
                    <Menu menus={menus} />
                    <br />
                    Loading Form...
                </div>
            ) 
        } else {
            return (
                <div className='indentDiv4'>
                    <div>
                        <Menu menus={menus} />
                    </div>
                    <h3>Terrain Calculator</h3>
                    <div style={outerDivStyle}>
                        <label style={lineLabel}>Hydrographics</label> 
                        <button onClick={this.updateHydrographics.bind(this, 1)}>+</button>
                        <label style={labelStyle}>{this.state.hydrographics}</label>
                        <button onClick={this.updateHydrographics.bind(this, -1)}>-</button>
                        <br />
                    </div>
                    <br />
                    <div style={outerDivStyle}>
                        <label style={lineLabel}>Tectonics</label> 
                        <button onClick={this.updateTectonics.bind(this, 1)}>+</button>
                        <label style={labelStyle}>{this.state.tectonics}</label>
                        <button onClick={this.updateTectonics.bind(this, -1)}>-</button>
                        <br />
                    </div>
                    <br />
                    <div>
                        {Object.keys(this.state.terrain).map((item, i) => 
                            <div key={i}>
                                <label style={rightLabel}>{item} :</label>
                                <label style={rightLabel}>{this.formatDecimal(Math.floor(this.state.terrain[item] * 100000) / 1000, 3)}</label>
                            </div>
                        )}
                    </div>
                </div>
            )
        }
    }

    formatDecimal(value, precision) {
        return Number(value).toFixed(precision);
    }

    updateHydrographics(increment) {
        let hydro = this.state.hydrographics
        hydro += increment
        if (hydro < 0) {
            hydro = 0
        } else if (hydro > 100) {
            hydro = 100
        }
        this.setState( { hydrographics: hydro })
        this.calculateTerrain(hydro, this.state.tectonics)
    }

    updateTectonics(increment) {
        let tect = this.state.tectonics
        tect += increment
        if (tect < 0) {
            tect = 0
        } else if (tect > 50) {
            tect = 50
        }
        this.setState( { tectonics: tect })
        this.calculateTerrain(this.state.hydrographics, tect)
    }

    // Determine Tectonic activity, 0 to 50
    // Determine Ice Cap Top (flip coin)
    // Determine Ice Cap Bottom (flip coin)
    // Ice Cap is 5% of Water e.g. 72% Water, 3.6% per cap
    // Ice Shelf is 5% of Water e.g. 72% Water, 3.6% Ice Shelf
    // DirtyIce (Land% of Ice Cap)
    // Remove Ice Cap from Water
    // Remove Ice Shelf from Land
    // Remove DirtyIce from Ice Cap
    // Determine Mountains, Tectonic % of Land
    // Determine Deserts as a function of Mountains and Land
    // Snow (Tectonic - 20 of Mountains) could be zero
    // Remove Snow from Mountains
    // Determine Tundra, 50% of Ice Shelf, 50% of Ice Cap
    // Veldt is the remaining Land after removing Mountains, Tundra and Deserts
    calculateTerrain(hydrographics, tectonics) {
        let hydro = hydrographics / 100
        let tect = tectonics / 100

        let land = 1.0 - hydro
        let iceCap = 0.05 * hydro
        let iceShelf = 0.05 * hydro
        let dirtyIce = land * iceCap
        hydro -= iceCap
        iceCap -= dirtyIce
        let mountain = tect * land
        let desert = mountain * land
        let snow = (tect - .20) > 0 ? (tect - .20) * mountain : 0.0
        mountain -= snow
        let tundra = 0.5 * iceShelf + 0.5 * iceCap
        let veldt = land - mountain - tundra - desert - iceShelf - snow
        let checksum = hydro + iceCap + iceShelf + dirtyIce + mountain + desert + snow + tundra + veldt

        this.setState({ terrain: {
            water: hydro,
            iceCap: iceCap,
            dirtyIce: dirtyIce,
            iceShelf: iceShelf,
            tundra: tundra,
            mountain: mountain,
            snow: snow,
            desert: desert,
            veldt: veldt,
            checksum: checksum,
            hydro: hydro + iceCap + dirtyIce,
            land: iceShelf + snow + mountain + desert + tundra + veldt
        }})
        
    }
}