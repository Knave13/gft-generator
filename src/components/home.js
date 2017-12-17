import React, {Component} from 'react'
import Menu from './menu'

export default class Home extends Component {
    render() {
        let menus = [
            {
                url: '/galaxy',
                name: 'Go Home'
            }
        ]
        return (
            <div className="App">
                <Menu menus={menus} />
                <br/>
                <h1>Home</h1>
            </div>
        )
    }
}
