import React, { Component } from 'react'

export default class StarSystem extends Component {
    constructor(props) {
        super(props)       
    }

    componentWillMount() {
        this.setState({"planetData": ""})
    }

    componentDidMount() {
    }

    render () {
        return (
            <div>
                <button onClick={this.showPlanetDetails.bind(this)}>Details</button>
            </div>
        )
    }
    showPlanetDetails() {
        //console.log(JSON.stringify(this.props.planetData, null, 2))
    }
}