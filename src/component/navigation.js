import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

export default class navigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact to="/" activeStyle={{ color: 'green' }}>home</NavLink></li>
                    <li><NavLink exact to="/page1" activeStyle={{ color: 'green' }}>page1</NavLink></li>
                    <li> <NavLink exact to="/page2" activeStyle={{ color: 'green' }}>page2</NavLink></li>
                    <li> <NavLink exact to="/page3" activeStyle={{ color: 'green' }}>page3</NavLink></li>

                </ul>
            </div>
        )
    }
}
