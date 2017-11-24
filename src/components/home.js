import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className="App">
                <Link className='foo' to='/'>Home</Link>
                <Link to='/galaxy'>Galaxies</Link>
                <br/>
                <h1>Home</h1>
            </div>
        )
    }
}
