import React, {Component} from 'react'
import StellarData from '../../data/stellarData'
import Menu from '../menu'

export default class TestTemperature extends Component {
    state = {
        dataLoaded: false,
        albedoData: [],
        terrainData: [],
        landData: [],
        terrainCheck: 100.0,
        cloudPercentage: 55.0,
        temperature: 0.0,
        greenhouse: 1.1,
        orbitDistance: 1.0,
        luminosity: 1.0,
        calculatedAlbedo: 0.0
    }

    componentDidMount() {
        let albedoValues = []
        let terrainValues = []
        let landValues = []
        let albedoCount = Object.keys(StellarData.albedo).length
        for (let i = 0; i < albedoCount; i++) {
            let keyName = Object.keys(StellarData.albedo)[i]
            let keyValue = StellarData.albedo[Object.keys(StellarData.albedo)[i]]
            albedoValues.push({ name: keyName, value: keyValue })
            terrainValues.push({ name: keyName, value: 0 })
            landValues.push({ name: keyName, value: 0 })
        }
        terrainValues[0].value = 11.9   // Veldt
        terrainValues[1].value = 2.7    // Desert
        terrainValues[2].value = 3.0    // Tundra
        terrainValues[3].value = 2.4    // SeaIce
        terrainValues[4].value = 3.5    // IceShelf
        terrainValues[5].value = 0.9    // Snow
        terrainValues[6].value = 1.1    // DirtyIce
        terrainValues[7].value = 8.0    // Mountain
        terrainValues[8].value = 66.5   // Water
        terrainValues[9].value = this.state.cloudPercentage

        landValues[0].value = terrainValues[0].value / (100.0 - terrainValues[8].value)
        landValues[1].value = terrainValues[1].value / (100.0 - terrainValues[8].value)
        landValues[2].value = terrainValues[2].value / (100.0 - terrainValues[8].value)
        landValues[3].value = terrainValues[3].value / (100.0 - terrainValues[8].value)
        landValues[4].value = terrainValues[4].value / (100.0 - terrainValues[8].value)
        landValues[5].value = terrainValues[5].value / (100.0 - terrainValues[8].value)
        landValues[6].value = terrainValues[6].value / (100.0 - terrainValues[8].value)
        landValues[7].value = terrainValues[7].value / (100.0 - terrainValues[8].value)
        landValues[8].value = terrainValues[8].value / 100.0
        landValues[9].value = terrainValues[9].value / 100.0


        this.setState({ 
            dataLoaded: true,
            albedoData: albedoValues,
            terrainData: terrainValues,
            landData: landValues
        })
    }

    render() {
        const lineLabel = {
            display: 'inline-block',
            textAlign: 'left',
            minWidth: '110px',
            fontSize: '18px'
        }
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
                    <div>
                        <h3>Distance from star (AU): 1</h3>
                    </div>
                    <div>
                    </div>
                    <div style={outerDivStyle}>
                        {this.state.albedoData.map((item, i) => 
                            <div key={i}>
                                <label style={lineLabel}>{item.name}</label>
                                <button onClick={this.updateAlbedo.bind(this, i, 0.01)}>+</button>
                                <label style={labelStyle}>{Number(item.value).toPrecision(2)}</label>
                                <button onClick={this.updateAlbedo.bind(this, i, -0.01)}>-</button>
                                <br />
                            </div>
                        )}
                    </div>
                    <div style={outerDivStyle}>
                        {this.state.terrainData.map((item, i) => 
                            <div key={i}>
                                <label style={lineLabel}>{item.name}</label>
                                <button onClick={this.updateTerrain.bind(this, i, 0.1)}>+</button>
                                <label style={labelStyle}>{item.value}%</label>
                                <button onClick={this.updateTerrain.bind(this, i, -0.1)}>-</button>
                                <label style={labelStyle}>{Math.floor(this.state.landData[i].value * 100)}</label>
                                <br />
                            </div>
                        )}
                    </div>
                    <div>
                        Albedo : {this.state.calculatedAlbedo}
                    </div>
                    <div>
                        Terrain Total : {this.state.terrainCheck}%
                    </div>
                    <div>
                        Temperature : {this.state.temperature}
                    </div>
                </div>
            )
        }
    }

    updateAlbedo(index, delta) {
        let albedoData = this.state.albedoData
        let newValue = (Math.floor(albedoData[index].value * 100) + Math.floor(delta * 100)) / 100

        if (newValue <= 1 && newValue >= 0) {
            albedoData[index].value = newValue
        }
        this.setState({ albedoData: albedoData})
        this.updateTemperature()
    }

    updateTerrain(index, delta) {
        let terrainValues = this.state.terrainData
        let newValue = (Math.floor(terrainValues[index].value * 10) + Math.floor(delta * 10)) / 10
        if (newValue <= 100 && newValue >= 0) {
            terrainValues[index].value = newValue
        }
        let checkValue = 0
        for (let i = 0; i < 9; i++) {
            checkValue += terrainValues[i].value
        }
        let landValues = this.state.landData
        landValues[0].value = terrainValues[0].value / (100.0 - terrainValues[8].value)
        landValues[1].value = terrainValues[1].value / (100.0 - terrainValues[8].value)
        landValues[2].value = terrainValues[2].value / (100.0 - terrainValues[8].value)
        landValues[3].value = terrainValues[3].value / (100.0 - terrainValues[8].value)
        landValues[4].value = terrainValues[4].value / (100.0 - terrainValues[8].value)
        landValues[5].value = terrainValues[5].value / (100.0 - terrainValues[8].value)
        landValues[6].value = terrainValues[6].value / (100.0 - terrainValues[8].value)
        landValues[7].value = terrainValues[7].value / (100.0 - terrainValues[8].value)
        landValues[8].value = terrainValues[8].value / 100.0
        landValues[9].value = terrainValues[9].value / 100.0

        this.setState({ 
            terrainData: terrainValues,
            terrainCheck: checkValue,
            landData: landValues
        })
        this.updateTemperature()
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
        this.setState({ calculatedAlbedo: albedo})
        return albedo
    }
}