import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

export default class Galaxy extends Component {
    componentWillMount() {
        this.setState({redirect: false})
    }
    render() {
        if (this.state.redirect) {
            let url = '/galaxy/' + this.props.id
            return (<Redirect push to={url}/>)
        } else {
            return (
                <tr key={this.props.id}>
                    <td>{this.props.id}</td>
                    <td>{this.props.data.name}</td>
                    <td>{this.props.starCount}</td>
                    <td>
                        <button onClick={this.showGalaxyDetails.bind(this)}>Details</button>
                    </td>
                </tr>
            )
        }
    }

    showGalaxyDetails() {
        this.setState({redirect: true})
    }
}