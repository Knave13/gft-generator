import React, { Component } from 'react'

export default class DataField extends Component {
    constructor(props) {
        super(props)
        // props.data = number
        // props.options = {
        //  precision: 3,
        //  units: 'C',
        //  styles: [ {
        //   val: 100,
        //   style: {} 
        //   }, {
        //   val: 1000,
        //   style: {} 
        //   },
        //   etc...
        //  ]
        // }
        //        
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    render () {
        // grab the last option as the else clause or to handle a single style
        if (isNaN(this.props.data)) {
            return (
                <div>
                    {this.props.data}
                </div>
            )
        } else {
            var dataStyle = this.props.options.defaultStyle
            for (var i = 0; i < this.props.options.styles.length; i++) {
                if (this.props.data < this.props.options.styles[i].val) {
                    dataStyle = this.props.options.styles[i].style
                    break
                }
            }
            var num = new Number(this.props.data)
            var output = num.toPrecision(this.props.options.precision)
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