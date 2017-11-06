import React, { Component } from 'react'

export default class StarAstronomics extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    render () {
        const divStyle = {
            'paddingTop': '10px',
            'paddingBottom': '10px',
            'paddingLeft': '0px',
            'textAlign': 'left'
        }
        // "astronomics": {
        //     "classification": 4,
        //     "luminosity": 0.0136,
        //     "magnitude": 9.81,
        //     "mass": 0.3626,
        //     "radii": 0.3962,
        //     "sizeCode": "V",
        //     "temperature": 2940,
        //     "typeCode": "M",
        //     "zones": "HOOOOOOOOOOOOOOOOOOO"
        // }

        if (this.props.astronomics == null) {
            return (
                <div className='container' style={divStyle}>
                    <h1>No data loaded</h1>
                </div>
            )

        } else {
            return (
                <div className='container' style={divStyle}>
                    <table>
                        <tbody>
                            <tr><td>Luminosity</td><td>{this.props.astronomics.luminosity}</td></tr>
                            <tr><td>Magnitude</td><td>{this.props.astronomics.magnitude}</td></tr>
                            <tr><td>Mass</td><td>{this.props.astronomics.mass}</td></tr>
                            <tr><td>Radii</td><td>{this.props.astronomics.radii}</td></tr>
                            <tr><td>Temperature</td><td>{this.props.astronomics.temperature}</td></tr>
                            <tr><td>Zones</td><td>{this.props.astronomics.zones}</td></tr>
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}
