import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class page2 extends Component {
    render() {
        if (sessionStorage.getItem('username')==null) {
            return <Redirect to='/login' />
            
        }
        else {
return (
            <div>
                <h1>page2</h1>
                <button><Link to ="/page3/majed">send</Link></button>
            </div>
        )
        }
        
    }
}
