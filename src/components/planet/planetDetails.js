import React, {Component} from 'react'
import Menu from '../menu'

export default class PlanetDetails extends Component {
    state = {
        planetData: ''
    }
    componentWillMount() {
    }

    componentDidMount() {
        let planetRef = this.props.db.collection('planets').doc(this.props.match.params.star)

        this.setState({planetRef: planetRef})
        planetRef.get()
            //.orderBy('name').get()
            .then(p => {
                this.setState({planetData: p.data()})
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
            },
            {
                url: '/galaxy/' + this.props.match.params.id + '/starSystems',
                name: 'Star Systems'
            },
            {
                url: '/galaxy/' + this.props.match.params.id + '/starSystems/' + this.props.match.params.star + '/planets',
                name: 'Planet List'
            }
        ]
        if (this.state.planetData === '') {
            return (
                <div>
                    <Menu menus={menus} />
                    <br />
                    Loading Orbit {this.props.match.params.planet}...
                </div>
            )
        } else {
            let orbit = this.props.match.params.orbit
            console.log(JSON.stringify(this.state.planetData.planets.orbitData.orbits[orbit], null, 2))
            return (
                <div>
                    <Menu menus={menus} />
                    <br />
                    Planets Loaded: Orbit {orbit}
                </div>
            )
        }
    }
}