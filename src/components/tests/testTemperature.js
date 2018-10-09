import React, {Component} from 'react'
import StellarData from '../../data/stellarData'
import Terrain from './components/terrain'
import Albedo from './components/albedo'
import Menu from '../menu'

export default class TestTemperature extends Component {
    state = {
        dataLoaded: false,
        hydrographics: 70,
        tectonics: 30,
        temperature: 0.0,
        terrain: {
            water: { name: 'Oceans', value: 0, precision: 3, isTerrain: true, albedo: StellarData.albedo.Water },
            iceCap: { name: 'Ice Cap', value: 0, precision: 3, isTerrain: true, albedo: StellarData.albedo.IceCap },
            dirtyIce: { name: 'Dirty Ice', value: 0, precision: 3, isTerrain: true, albedo: StellarData.albedo.DirtyIce },
            iceShelf: { name: 'Ice Shelf', value: 0, precision: 3, isTerrain: true, albedo: StellarData.albedo.IceShelf },
            tundra: { name: 'Tundra', value: 0, precision: 3, isTerrain: true, albedo: StellarData.albedo.Tundra },
            mountain: { name: 'Mountain', value: 0, precision: 3, isTerrain: true, albedo: StellarData.albedo.Mountain },
            snow: { name: 'Snow', value: 0, precision: 3, isTerrain: true, albedo: StellarData.albedo.Snow },
            desert: { name: 'Desert', value: 0, precision: 3, isTerrain: true, albedo: StellarData.albedo.Desert },
            veldt: { name: 'Veldt', value: 0, precision: 3, isTerrain: true, albedo: StellarData.albedo.Veldt },
            clouds: { name: 'Clouds', value: 0 / 100 + .20, precision: 3, isTerrain: false, albedo: StellarData.albedo.Couds },
            checksum: { name: 'Checksum', value: 0, precision: 0, isTerrain: false, albedo: 0.0 },
            hydro: { name: 'Water', value: 0, precision: 0, isTerrain: false, albedo: 0.0 },
            land: { name: 'Land', value: 0, precision: 0, isTerrain: false, albedo: 0.0 }
        }
    }

    componentDidMount() {
        this.setState({ dataLoaded: true })
    }

    render() {
        let menus = [
            {
                url: '/',
                name: 'Home'
            },
            {
                url: '/galaxy/tests',
                name: 'Tests'
            }
        ]
        const divBlockStyle = {
            display: 'inline-block',
            textAlign: 'left'
        }
        const centerLabel = {
            display: 'inline-block',
            textAlign: 'center',
            minWidth: '50px',
            fontSize: '18px'
        }
        const leftLabel = {
            display: 'inline-block',
            textAlign: 'left',
            minWidth: '150px',
            fontSize: '18px'
        }

        if (!this.state.dataLoaded) {
            return (
                <div>
                    <Menu menus={menus} />
                    <h2>Terrain Temperature Calculator</h2>
                    <div>
                        Loading Temperature Data...
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <Menu menus={menus} />
                    <div style={divBlockStyle}>
                        <label style={leftLabel}>Hydrographics</label> 
                        <button onClick={this.updateHydrographics.bind(this, 1)}>+</button>
                        <label style={centerLabel}>{this.state.hydrographics}</label>
                        <button onClick={this.updateHydrographics.bind(this, -1)}>-</button>
                    </div>
                    <br />
                    <div style={divBlockStyle}>
                        <label style={leftLabel}>Tectonics</label> 
                        <button onClick={this.updateTectonics.bind(this, 1)}>+</button>
                        <label style={centerLabel}>{this.state.tectonics}</label>
                        <button onClick={this.updateTectonics.bind(this, -1)}>-</button>
                    </div>
                    <br />
                    <Terrain 
                        hydrographics={this.state.hydrographics}
                        tectonics={this.state.tectonics}
                        terrain={this.state.terrain}
                        postResults={this.updateTerrainData.bind(this)} />
                    <Albedo 
                        terrain={this.state.terrain}
                        postResults={this.updateAlbedoData.bind(this)} />
                    <div>
                        Temperature: {this.state.temperature}
                    </div>
                </div>
            )
        }
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
    }

    updateTerrainData(data) {
        let temperature = 1.0
        this.setState({ temperature: temperature })
    }

    updateAlbedoData(data) {
        let temperature = 2.0
        this.setState({ temperature: temperature })
    }

    updateTemperature() {
        let albedo = this.calculateAlbedo()
        let k = 374.025
        let temp = k * this.state.greenhouse * (1.0 - albedo) * Math.pow(this.state.luminosity, 0.25) / this.state.orbitDistance + StellarData.kelvin

        this.setState({ 
            temperature: temp,
            albedo: albedo
        })
    }

    calculateAlbedo() {
        let albedo = 0.0
    
        let cloudiness = this.state.terrainData[9].value / 100
        let cloudMod = 1.0 - cloudiness
    
        albedo = cloudiness * this.state.albedoData[9].value
        for (let i = 0; i < 9; i++) {
            albedo += this.state.terrainData[i].value / 100 * cloudMod * this.state.albedoData[i].value
        }
        
        return albedo
    }
}