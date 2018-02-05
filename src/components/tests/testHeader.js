import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import ReactDataGrid from 'react-data-grid'
import GenPlanets from '../../classes/generate-planets'
import StellarData from '../../data/stellarData'
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
                url: '/galaxy/tests/albedo',
                name: 'Albedo'
            }
        ]
        return (
            <div>
                <Menu menus={menus} />
            </div>
        )
    }
}