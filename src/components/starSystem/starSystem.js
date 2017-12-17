import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import StellarData from '../../data/stellarData'

export default class StarSystem extends Component {
    state = {
        starSystem: '',
        redirect: false
    }

    componentWillMount() {}

    componentDidMount() {}
                // <div className='container' style={divStyle}>
                //     <h1>{this.props.starSystem.name}</h1>
                //     <br/>
                //     <div>
                //         {starKey}
                //         <br/> {friendlyType}({this.props.starSystem.primaryStar.classification}) {friendlySize}
                //     </div>
                //     <StarAstronomics astronomics={this.props.starSystem.astronomics}/>
                //     <Planets starData={this.props.starSystem.primaryStar}/>
                // </div>
    render() {
        const divStyle = {
            'paddingTop': '10px',
            'paddingBottom': '10px',
            'paddingLeft': '150px',
            'textAlign': 'left'
        }
        if (this.state.redirect) {
            let url='/galaxy/' + this.props.galaxy + '/starSystems/' + this.props.starSystem.id
            return (
                <Redirect push to={url} />
            )
        } else {
        if (this.props.starSystem === '') {
            return (
                <div className='container' style={divStyle}>
                    <h1>No system loaded</h1>
                </div>
            )

        } else {
            let starSystem = this.props.starSystem
            let starKey = starSystem.primaryStar.typeCode + starSystem.primaryStar.classification + " " + starSystem.primaryStar.sizeCode
            let friendlyType = StellarData.starTypeColor[starSystem.primaryStar.typeCode]
            let friendlySize = StellarData.starSizeName[starSystem.primaryStar.sizeCode]

            return (
                <tr>
                    <td>{starSystem.name}</td>
                    <td>{starKey}</td>
                    <td>{friendlyType}</td>
                    <td>{friendlySize}</td>
                    <td>{starSystem.astronomics.luminosity}</td>
                    <td>{starSystem.astronomics.magnitude}</td>
                    <td>{starSystem.astronomics.mass}</td>
                    <td>{starSystem.astronomics.radii}</td>
                    <td>{starSystem.astronomics.temperature}</td>
                </tr>
            )
        }
    }
    }

    showSystemDetails() {
        this.setState({redirect: true})
    }
}
