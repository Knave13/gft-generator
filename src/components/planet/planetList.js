import React, {Component} from 'react'
import GenPlanets from '../../classes/generate-planets'
import PlanetDetails from './planetDetails'
import DataField from '../dataField'

const divStyle = {
  'paddingTop': '10px',
  'paddingBottom': '10px',
  'paddingLeft': '10px',
  'textAlign': 'left'
}
const tableStyle = {
  color: 'black',
  'borderSpacing': '0px'
}
const tempOptions = {
  precision: 4,
  units: 'C',
  defaultStyle: {
    'color': 'black'
  },
  styles: [{
    val: 0,
    style: {
      'color': 'blue'
    }
  }, {
    val: 50,
    style: {
      'color': 'green'
    }
  }, {
    val: 10000,
    style: {
      'color': 'red'
    }
  }]
}
const numberOptions = {
  precision: 4,
  units: '',
  defaultStyle: {
    'color': 'black'
  },
  styles: []
}

export default class Planets extends Component {
  componentWillMount() {
    this.setState({
      "planetData": ""
    })
  }

  render() {
    // (this.state.planetData.orbitData.orbits[j].temperate > 100) ? {color: 'red'} :
    // ''
    if (this.props.starData == null) {
      return (
        <div className='container' style={divStyle}>
            <h1>No System loaded</h1>
        </div>
      )
    } else {
      console.log("state", JSON.stringify(this.state, null, 2))
      if (this.state.planetData === '') {
        return (
        <div>
          <h1>No Planets Loaded</h1>
          <button
            onClick={this.addPlanets.bind(this)}>Add Planets</button>
        </div>
        )
      } else {
        let orbitData = this.state.planetData.orbitData
        return (
          <div className='container' style={divStyle}>
            <button
              onClick={this
              .addPlanets
              .bind(this)}>Add Planets</button>
            <br/>
            <div>
            <table className="Board" style={tableStyle}>
              <tbody>
                <tr>
                  <th>Orbit</th>
                  <th>Zone</th>
                  <th>Type</th>
                  <th>Radiius</th>
                  <th>Atmosphere</th>
                  <th>Temperature</th>
                  <th>Period</th>
                  <th>Gravity</th>
                  <th>Moons</th>
                </tr>
                {orbitData.orbits.map((val, i) => {
                  return this.generatePlanetRow(val, i)
                })}
              </tbody>
            </table>
            </div>
          </div>
        )
      }
    }
  }

  addPlanets() {
    let options = {
      sol: true
    }
    GenPlanets.generatePlanetaryBodies(this.props.starData, options, (planetData) => {
      this.setState({
        "planetData": planetData
      })
    })
  }

  renderPlanetRow = (orbitData, key) => {
    return (
      <tr key={key}>
        <td>
          {key}
        </td>
        <td>
          {orbitData.orbitZoneCode}
        </td>
        <td>
          {orbitData.orbitType}
        </td>
        <td>
          {orbitData.details && orbitData.details.radius}
        </td>
        <td>
          {orbitData.details && orbitData.details.atmosphere}
        </td>
        <td>
          <DataField
              options={tempOptions}
              data={orbitData.details && orbitData.details.temperature}/>
        </td>
        <td>
          <DataField
              options={numberOptions}
              data={orbitData.details && orbitData.details.physics.periodDays}/>
        </td>
        <td>
          <DataField
              options={numberOptions}
              data={orbitData.details && orbitData.details.physics.gravity}/>
        </td>
        <td>
          {orbitData.details && orbitData.details.moons}
        </td>
      </tr>
    )
  }
}
