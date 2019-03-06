import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Menu from '../menu'

export default class GalaxyDetails extends Component {
  state = {
    galaxyData: '',
    redirect: false
  }
  componentWillMount() {
  }

  componentDidMount() {
    let galaxyRef = this.props.db.collection('galaxies')
    galaxyRef.doc(this.props.match.params.id).get()
      .then(g => {
        this.setState({galaxyData: g.data()})
      })
  }

  render() {
    let menus = [
      {
        url: '/',
        name: 'Home'
      },
      {
        url: '/galaxy',
        name: 'Galaxies'
      }
    ]
    if (this.state.redirect) {
      let url = '/galaxy/' + this.props.match.params.id + '/starSystems/'
      return (
        <Redirect push to={url}/>
      )
    } else {
      if (this.state.galaxyData === '') {
        return ( 
          <div>
            <Menu menus={menus} />
            <br/>
            <br/>
            Loading Galaxy {this.props.match.params.id}
          </div>
        )
      } else {
        return (
          // retrieve the galaxy statistical data and display it here
          <div>
            <Menu menus={menus} />
            <h1>{this.state.galaxyData.name}</h1> 
            <div>
              Star Count: {this.state.galaxyData.starCount}
            </div> 
            <button onClick = {this.showStarSystems.bind(this)}>Star Systems</button>
          </div>
        )
      }
    }
  }

  showStarSystems() {
    this.setState({redirect: true})
  }
}