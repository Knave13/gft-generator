import React, {Component} from 'react'

export default class Terrain extends Component {
    render() {
        if (this.props.terrain.orbitType === 'Planet') {
            let surfaceData = this.props.terrain.terrainData.surface
            return (
                <div>
                    Albedo: {this.props.terrain.terrainData.albedo} <br />
                    <br />
                    {surfaceData.desert > 0 &&
                        <div>
                            Desert: {surfaceData.desert}
                        </div>
                    }
                    {surfaceData.veldt > 0 && 
                        <div>
                            Veldt: {surfaceData.veldt}
                        </div>
                    }
                    {surfaceData.mountains > 0 &&
                        <div>
                            Mountains: {surfaceData.mountains}
                        </div>
                    }
                    {surfaceData.ice > 0 &&
                        <div>
                            Sea Ice: {surfaceData.ice}
                        </div>
                    }
                    {surfaceData.tundra > 0 &&
                        <div>
                            Tundra: {surfaceData.tundra}
                        </div>
                    }
                    {surfaceData.water > 0 &&
                        <div>
                            Water: {surfaceData.water}
                        </div>
                    }
                </div>
            )
        } else {
            return (
                <div>
                    Planet Type: {this.props.terrain.orbitType}
                    <br />
                    No Terrain Data Generated
                </div>
            )
    }
    }

    formatDecimal = (value, precision) => {
        return Number(value).toFixed(precision);
    }

}