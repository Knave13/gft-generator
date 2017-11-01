import React, { Component } from 'react'

export default class Galaxies extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        const divStyle = {
            'paddingTop': '10px',
            'paddingBottom': '10px'
        }   
        return (
            <div className='container' style={divStyle}>
                <h1>Welcome to the GFT Galaxy Generator</h1>
                <br/>
                <button onClick={this.props.addStarSystem}>Add Star System</button>
                <button onClick={this.props.addAstronomicalData}>Add Data</button>
            </div>
        )
    }
}
