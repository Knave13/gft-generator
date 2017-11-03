import React, { Component } from 'react'
import StellarData from '../data/stellarData'

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
            'paddingBottom': '10px'
        }
        var name, starKey, friendlyType, friendlySize
        if (this.props.starSystem == null) {
            starKey = ''
            name = 'No Star System loaded'
        } else {
            name = this.props.starSystem.name
            starKey = this.props.starSystem.primaryStar.typeCode + " " + this.props.starSystem.primaryStar.sizeCode
            friendlyType = StellarData.starTypeColor[this.props.starSystem.primaryStar.typeCode]
            friendlySize = StellarData.starSizeName[this.props.starSystem.primaryStar.sizeCode]
            console.log(JSON.stringify(this.props.starSystem.primaryStar.typeCode, null, 2))
        }
        return (
            <div className='container' style={divStyle}>
                <h1>{name}</h1>
                <br/>
                <div>
                    {starKey}
                    <br/>
                    {friendlyType} {friendlySize}
                </div>
            </div>
        )
    }
}
