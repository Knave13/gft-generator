import React, {Component} from 'react'

export default class Moon extends Component {
    componentWillMount() {
    }

    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                {this.displayMoonSize(this.props.data.size, this.props.data.radius)}
                <td>{this.props.data.size !== 'Ring' && this.props.data.atmosphere}</td>
                <td>{this.props.data.size !== 'Ring' && this.props.data.hydrographics}</td>
                {this.displayMoonTemperature(this.props.data.size, this.props.data.temperature)}
                <td>{this.props.data.size !== 'Ring' && this.formatDecimal(this.props.data.physics.gravity, 2)}</td>
                <td>{this.props.data.orbit}</td>
            </tr> 
        )
    }

    formatDecimal = (value, precision) => {
        return Number(value).toFixed(precision);
    }

    displayMoonSize = (size, radius) => {
        const ringStyle = {
            'textAlign': 'center',
            'color': 'DarkGray'
        }
        if (size === 'Ring') {
            return (<td style={ringStyle}>Ring</td>)
        } else {
            return (
                <td>{radius + ' km'}</td>
            )
        }
    }

    displayMoonTemperature = (size, temp) => {
        const coolStyle = {
            'color': 'Blue'
        }
        const warmStyle = {
            'color': 'Green'
        }
        const hotStyle = {
            'color': 'Red'
        }

        if (size === 'Ring') {
            return (<td />)
        }

        let myStyle = coolStyle
        if (temp > 0) {
            myStyle = warmStyle
        }
        if (temp > 45) {
            myStyle = hotStyle
        }
        return (
            <td style={myStyle}>{this.formatDecimal(temp, 2)}</td>
        )
    }
}