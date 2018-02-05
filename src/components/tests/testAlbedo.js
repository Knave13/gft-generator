import React, {Component} from 'react'
import ReactDataGrid from 'react-data-grid'
import GenPlanets from '../../classes/generate-planets'
import StellarData from '../../data/stellarData'
import Astronomics from '../../data/fileAstronomics'
import Menu from '../menu'

export default class TestTemperature extends Component {
    state = {
        dataLoaded: false,
        albedoData: [],
        terrainData: [],
        terrainCheck: 100.0,
        cloudPercentage: 60.0,
        temperature: 0.0,
        greenhouse: 1.1,
        orbitDistance: 1.0,
        luminosity: 1.0,
        calculatedAlbedo: 0.0,
        myStyle: ''
    }

    componentDidMount() {
        let albedoValues = []
        let terrainValues = []
        let albedoCount = Object.keys(StellarData.albedo).length
        for (let i = 0; i < albedoCount; i++) {
            let keyName = Object.keys(StellarData.albedo)[i]
            let keyValue = StellarData.albedo[Object.keys(StellarData.albedo)[i]]
            albedoValues.push({ name: keyName, value: keyValue })
            terrainValues.push({ name: keyName, value: 0 })
        }
        terrainValues[0].value = 9.0
        terrainValues[1].value = 3.0
        terrainValues[2].value = 3.0
        terrainValues[3].value = 72.0
        terrainValues[4].value = 5.0
        terrainValues[5].value = 1.0
        terrainValues[6].value = 1.0
        terrainValues[7].value = 6.0
        terrainValues[8].value = this.state.cloudPercentage

        this.setState({ 
            dataLoaded: true,
            albedoData: albedoValues,
            terrainData: terrainValues
        })

    }

    render() {
        const lineLabel = {
            display: 'inline-block',
            textAlign: 'left',
            ['min-width']: '110px',
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
                                <button onClick={this.updateTerrain.bind(this, i, 0.5)}>+</button>
                                <label style={labelStyle}>{item.value}%</label>
                                <button onClick={this.updateTerrain.bind(this, i, -0.5)}>-</button>
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
        let terrainData = this.state.terrainData
        let newValue = (Math.floor(terrainData[index].value * 10) + Math.floor(delta * 10)) / 10
        if (newValue <= 100 && newValue >= 0) {
            terrainData[index].value = newValue
        }
        let checkValue = 0
        for (let i = 0; i < 8; i++) {
            checkValue += terrainData[i].value
        }
        this.setState({ 
            terrainData: terrainData,
            terrainCheck: checkValue
        })
        this.updateTemperature()
    }

    updateTemperature() {
        let albedo = this.calculateAlbedo()
        let k = 374.025
        let temp = k * this.state.greenhouse * (1.0 - albedo) * Math.pow(this.state.luminosity, 0.25) / this.state.orbitDistance + StellarData.kelvin
    
        console.log('albedo', albedo)
        console.log('temp', temp)

        this.setState({ 
            temperature: temp,
            albedo: albedo
        })
    }

    calculateAlbedo() {
        let albedo = 0.0
    
        let cloudiness = this.state.terrainData[8].value / 100
        let cloudMod = 1.0 - cloudiness
    
        albedo = cloudiness * this.state.albedoData[8].value
        for (let i = 0; i < 8; i++) {
            albedo += this.state.terrainData[i].value / 100 * cloudMod * this.state.albedoData[i].value
        }
        this.setState({ calculatedAlbedo: albedo})
        return albedo
    }
}