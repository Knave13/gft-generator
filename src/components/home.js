import React, { Component } from 'react'
import Galaxies from './galaxies'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Galaxies database={this.props.db}/>
      </div>
    )
  }

}

export default App;
