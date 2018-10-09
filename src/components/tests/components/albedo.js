import React, {Component} from 'react'
import StellarData from '../../../data/stellarData'

export default class Albedo extends Component {
    state = {
        dataLoaded: false,
        terrain: {}
    }

    componentDidMount() {
        this.setState({ terrain: this.props.terrain })

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
        terrainValues[3].value = 2.4    // IceCap
        terrainValues[4].value = 3.5    // IceShelf
        terrainValues[5].value = 0.9    // Snow
        terrainValues[6].value = 1.1    // DirtyIce
        terrainValues[7].value = 8.0    // Mountain
        terrainValues[8].value = 66.5   // Water
        terrainValues[9].value = this.state.cloudPercentage
        
        this.setState( { dataLoaded: true })
        this.calculateAlbedo()
        this.props.postResults(this.state.terrain)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.terrain !== nextProps.terrain) {
            this.calculateAlbedo()
            this.props.postResults(this.state.terrain)
        }
    }

    render() {
        if (!this.state.dataLoaded) {
            return (
                <div>
                    Loading Albedo Data
                </div>
            ) 
        } else {
            return (
                <div>
                    Albedo Data
                    {Object.keys(this.state.terrain).map((item, i) => 
                        this.renderAlbedo(item, i)
                    )}
                </div>
            )
        }
    }

    formatDecimal(value, precision) {
        return Number(value).toFixed(precision);
    }

    renderAlbedo(item, index) {
        const leftLabel = {
            display: 'inline-block',
            textAlign: 'left',
            minWidth: '150px',
            fontSize: '18px'
        }
        const rightLabel = {
            display: 'inline-block',
            textAlign: 'right',
            minWidth: '100px',
            fontSize: '18px'
        }
        if (this.state.terrain[item].isTerrain) {
            return (
                <div key={index}>
                    <label style={leftLabel}>{this.state.terrain[item].name}</label>
                    <label style={rightLabel}>{this.formatDecimal(this.state.terrain[item].albedo, 2)}</label>
                </div>
            )
        } else {
            return
        }
    }

    calculateAlbedo() {

    }
}