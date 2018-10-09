import React, {Component} from 'react'

export default class Terrain extends Component {
    state = {
        dataLoaded: false,
        terrain: {}
    }

    componentDidMount() {
        this.setState( { dataLoaded: true, terrain: this.props.terrain })
        this.calculateTerrain(this.props.hydrographics, this.props.tectonics)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.tectonics !== nextProps.tectonics || this.props.hydrographics !== nextProps.hydrographics) {
            console.log('calculating terrain on ReceiveProps')
            this.calculateTerrain(nextProps.hydrographics, nextProps.tectonics)
        }
    }

    render() {
        if (!this.state.dataLoaded) {
            return (
                <div>
                    Loading Form...
                </div>
            ) 
        } else {
            return (
                <div>
                    {Object.keys(this.state.terrain).map((item, i) => 
                        this.renderTerrain(item, i)
                    )}
                </div>
            )
        }
    }

    formatDecimal(value, precision) {
        return Number(value).toFixed(precision);
    }

    renderTerrain(item, index) {
        const leftLabel = {
            display: 'inline-block',
            textAlign: 'left',
            minWidth: '150px',
            fontSize: '18px',
            paddingLeft: '10px'
        }
        const rightLabel = {
            display: 'inline-block',
            textAlign: 'right',
            minWidth: '100px',
            fontSize: '18px'
        }
        const rightLabelIndent = {
            display: 'inline-block',
            textAlign: 'right',
            minWidth: '100px',
            fontSize: '18px',
            paddingLeft: '20px' 
        }
        if (this.state.terrain[item].isTerrain) {
            return (
                <div key={index}>
                    <label style={leftLabel}>{this.state.terrain[item].name}</label>
                    <label style={this.state.terrain[item].isTerrain ? rightLabelIndent : rightLabel}>{this.formatDecimal(this.state.terrain[item].value * 100, this.state.terrain[item].precision)}</label>
                </div>)
        } else {
            return 
        }
    }

        // Determine Tectonic activity, 0 to 50
    // Determine Ice Cap Top (flip coin)
    // Determine Ice Cap Bottom (flip coin)
    // Ice Cap is 5% of Water e.g. 72% Water, 3.6% per cap
    // Ice Shelf is 5% of Water e.g. 72% Water, 3.6% Ice Shelf
    // DirtyIce (Land% of Ice Cap)
    // Remove Ice Cap from Water
    // Remove Ice Shelf from Land
    // Remove DirtyIce from Ice Cap
    // Determine Mountains, Tectonic % of Land
    // Determine Deserts as a function of Mountains and Land
    // Snow (Tectonic - 20 of Mountains) could be zero
    // Remove Snow from Mountains
    // Determine Tundra, 50% of Ice Shelf, 50% of Ice Cap
    // Veldt is the remaining Land after removing Mountains, Tundra and Deserts
    calculateTerrain(hydrographics, tectonics) {
        if (!this.state.terrain) {
            return
        }
        let hydro = hydrographics / 100
        let tect = tectonics / 100

        let land = 1.0 - hydro
        let iceCap = 0.05 * hydro
        let iceShelf = 0.05 * hydro
        let dirtyIce = land * iceCap
        hydro -= iceCap
        iceCap -= dirtyIce
        let mountain = tect * land
        let desert = mountain * land
        let snow = (tect - .20) > 0 ? (tect - .20) * mountain : 0.0
        mountain -= snow
        let tundra = 0.5 * iceShelf + 0.5 * iceCap
        let veldt = land - mountain - tundra - desert - iceShelf - snow
        let checksum = hydro + iceCap + iceShelf + dirtyIce + mountain + desert + snow + tundra + veldt

        let terrain = this.props.terrain

        terrain.water.value = hydro
        terrain.iceCap.value = iceCap
        terrain.dirtyIce.value = dirtyIce
        terrain.iceShelf.value = iceShelf
        terrain.tundra.value = tundra
        terrain.mountain.value = mountain
        terrain.snow.value = snow
        terrain.desert.value = desert
        terrain.veldt.value = veldt
        terrain.clouds.value = hydrographics / 100 + .10
        terrain.checksum.value = checksum
        terrain.hydro.value = hydro + iceCap + dirtyIce
        terrain.land.value = iceShelf + snow + mountain + desert + tundra + veldt

        this.setState({ terrain: terrain })
        this.props.postResults(terrain)
    }
}