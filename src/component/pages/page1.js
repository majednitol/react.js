import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class page1 extends Component {
    render() {
        if (sessionStorage.getItem('username') ==null) {
            return <Redirect to='/login'/>
        }
        else {
            return (
                <div>
                    <h1>page1</h1>
                </div>
            )
        }
        
    }
}
