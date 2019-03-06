import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Galaxy extends Component {
  componentWillMount() {
      this.setState({redirect: false})
  }
  render() {
    let url = '/galaxy/' + this.props.id + '/starSystems'
        
    return (
      <tr key={this.props.id}>
        <td><Link to={url} >{this.props.data.name}</Link></td>
        <td>{this.props.starCount}</td>
        <td>{this.props.data.activeIndicator.toString()}</td>
      </tr>
    )
  }
}