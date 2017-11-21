import React, { Component } from 'react'
import {Redirect, Link} from 'react-router-dom'
import firebase from 'firebase'
import 'firebase/firestore'

export default class GalaxyList extends Component {
    componentWillMount() {
        this.setState({redirect: false})
    }
    render() {
        if (this.state.redirect) {
            let url = '/galaxy/' + this.props.id
            return (
                <Redirect push to={url} />
            )
        } else {
            return (
                <div>
                    {this.props.data.name}
                    <button onClick={this.showGalaxyDetails.bind(this)}>Details</button>
                </div>
            )
        }
    }

    showGalaxyDetails() {
        this.setState({redirect: true})
    }
}