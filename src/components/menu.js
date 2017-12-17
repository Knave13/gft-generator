import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    
    render() {
        return (
            <div className='Menu'>
                {this.props.menus.map((item, i) => 
                    <Link key={i} to={item.url}>{item.name}</Link>  
                )}
            </div>)
    }
}
