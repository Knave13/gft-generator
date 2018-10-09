import React, {Component} from 'react'
import Menu from '../menu'

export default class TestHeader extends Component {
    render() {
        let menus = [
            {
                url: '/',
                name: 'Home'
            },
            {
                url: '/galaxy/tests/temperature',
                name: 'Temperature'
            },
            {
                url: '/galaxy/tests/stellar',
                name: 'Stellar'
            },
            {
                url: '/galaxy/tests/albedo',
                name: 'Albedo'
            },
            {
                url: '/galaxy/tests/terrain',
                name: 'Terrain'
            }
        ]
        return (
            <div>
                <Menu menus={menus} />
            </div>
        )
    }
}