import React, {Component} from 'react'
import ReactDataGrid from 'react-data-grid'
import GenPlanets from '../../classes/generate-planets'
import StellarData from '../../data/stellarData'
import Astronomics from '../../data/fileAstronomics'
import Menu from '../menu'

export default class TestTemperature extends Component {
    state = {
        dataLoaded: false,
        dataCount: 0,
        temperatureData: []
    }
    constructor(props) {
        super(props)
        this._columns = [          
            {
                key: 'starType',
                name: 'Type',
                cellClass: 'cellCenter',
                width: 60
            }, {
                key: 'starSize',
                name: 'Size',
                cellClass: 'cellCenter',
                width: 60
            }, {
                key: 'distance',
                name: 'Dist',
                cellClass: 'cellCenter',
                width: 80
            }, {
                key: 'targetAlbedo',
                name: 'albedo',
                cellClass: 'cellCenter',
                width: 120
            }, {
                key: 'targetTemp',
                name: 'Temp',
                cellClass: 'cellCenter',
                width: 80
            }
        ]
    }

    componentDidMount() {
        this.loadTemperatureData()
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
        const divStyle = {
            width: '500px'
        }
        if (this.state.dataLoaded === false) {
            return (
                <div>
                    <Menu menus={menus} />
                    <p>
                    Loading Temperature data...
                    </p>
                </div>
            )
        } else {
            return (
                <div style={divStyle}>
                    <Menu menus={menus} />
                    <br/>
                    <div className='indentDiv4'>
                        Atmosphere: Standard (g: 1.10)
                    </div>
                    <div className='indentDiv4'>
                        <ReactDataGrid
                            columns={this._columns}
                            rowGetter={this.rowGetter}
                            rowsCount={this.state.dataCount}
                            minHeight={500}/>
                    </div>
                    <div className='indentDiv4'>
                        K: 374.025
                        <br />
                        T: 288 K (~15 C)
                    </div>            
                </div>
            )
        }
    }

    loadTemperatureData() {
        let typeCount = Object.keys(StellarData.starType).length
        let sizeCount = Object.keys(StellarData.starSize).length
        let temperatureData = []
        for (let i = 0; i < sizeCount; i++) {
            for (let j = 1; j < typeCount; j++) {
                for (let k = 0; k < 10; k++) {
                    let starSize = StellarData.starSize[Object.keys(StellarData.starSize)[i]]
                    let starType = StellarData.starType[Object.keys(StellarData.starType)[j]]

                    if (starType != 'M' || (starType === 'M' && k < 6)) {
                        let code = starType + k.toString() + starSize
                        let name = starType + k.toString()
                        let astronomics = Astronomics.findByKey(code)
                        let orbit = astronomics.zones.indexOf('H')
                        if (orbit != -1) {
                            let K = 375.025
                            let G = 1.1
                            let T = 288.0
                            let D = StellarData.radiusau[orbit]
                            let L = astronomics.luminosity

                            let temp = 1.0 - (T * Math.pow(D, 0.5) / K / G / Math.pow(L, 0.25))

                            temperatureData.push({
                                starType: name,
                                starSize: starSize,
                                distance: D,
                                targetAlbedo: temp,
                                targetTemp: '288'
                            })
                        }
                    }
                }
            }
        }
        this.setState({ dataLoaded: true, dataCount: temperatureData.length, temperatureData: temperatureData })
    }

    rowGetter = (i) => {
        return this.state.temperatureData[i]
    }
}