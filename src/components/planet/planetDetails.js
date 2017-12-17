import React, {Component} from 'react'

export default class PlanetDetails extends Component {
    componentWillMount() {
        this.setState({"planetData": ""})
    }

    componentDidMount() {}

    render() {
        return (
            <div>
                <button
                    onClick={this
                    .showPlanetDetails
                    .bind(this)}>Details</button>
            </div>
        )
    }
    showPlanetDetails() {
        //console.log(JSON.stringify(this.props.planetData, null, 2))
    }
}