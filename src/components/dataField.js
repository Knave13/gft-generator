import React, {Component} from 'react'

export default class DataField extends Component {
    // props.data = number props.options = {  precision: 3,  units: 'C',  styles: [
    // {   val: 100,   style: {}   }, {   val: 1000,   style: {}   },   etc...  ] }
    //

    render() {
        // grab the last option as the else clause or to handle a single style
        if (isNaN(this.props.data)) {
            return (
                <div>
                    {this.props.data}
                </div>
            )
        } else {
            let dataStyle = this.props.options.defaultStyle
            for (let i = 0; i < this.props.options.styles.length; i++) {
                if (this.props.data < this.props.options.styles[i].val) {
                    dataStyle = this.props.options.styles[i].style
                    break
                }
            }

            let output = this
                .props
                .data
                .toPrecision(this.props.options.precision)
            if (this.props.options.units) {
                output += ' ' + this.props.options.units
            }
            return (
                <div style={dataStyle}>
                    {output}
                </div>
            )
        }

    }
}