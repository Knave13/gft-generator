import React, {Component} from 'react'

export default class StarSystemDetails extends Component {
    state = {
        systemData: '',
        redirect: false
    }
    componentWillMount() {
    }

    componentDidMount() {
        let starSystemRef = this.props.db.collection('starSystems')
        let starId = this.props.match.params.star
        starSystemRef.doc(starId).get()
            .then(s => {
                this.setState({systemData: s.data()})
                console.log(starId, JSON.stringify(this.state.systemData, null, 2))
            })
    }

    render() {
        if (this.state.systemData === '') {
            return (<div>
                <h1>Star System Details</h1>
                <br/>
                Loading...
            </div>)
        } else {
            return (
                <div>
                    <h1>Star System Details</h1>
                    <br/>
                    <button onClick={this.generatePlanets.bind(this)}>Generate Planets</button>
                </div>
            )
        }
    }

    generatePlanets() {
        
    }
}