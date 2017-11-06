import React, { Component } from 'react'
import StellarData from '../data/stellarData'
import StarAstronomics from './starAstronomics'

export default class StarSystem extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    render () {
        const divStyle = {
            'paddingTop': '10px',
            'paddingBottom': '10px',
            'paddingLeft': '150px',
            'textAlign': 'left'
        }

        if (this.props.starSystem == null) {
            return (
                <div className='container' style={divStyle}>
                    <h1>No sytem loaded</h1>
                </div>
            )

        } else {
            let starKey = this.props.starSystem.primaryStar.typeCode + this.props.starSystem.primaryStar.classification + " " + this.props.starSystem.primaryStar.sizeCode
            let friendlyType = StellarData.starTypeColor[this.props.starSystem.primaryStar.typeCode]
            let friendlySize = StellarData.starSizeName[this.props.starSystem.primaryStar.sizeCode]

            return (
                <div className='container' style={divStyle}>
                    <h1>{this.props.starSystem.name}</h1>
                    <br/>
                    <div>
                        {starKey}
                        <br/>
                        {friendlyType}({this.props.starSystem.primaryStar.classification}) {friendlySize}
                    </div>
                    <StarAstronomics astronomics={this.props.starSystem.astronomics} />
                </div>
            )
        }
    }
}
