import React, { Component } from 'react'

export default class login extends Component {
    login=()=>{
        sessionStorage.setItem('username','majed')
    }
    logout=()=>{
        sessionStorage.clear()
    }
    render() {
        return (
            <div>
                <button onClick={this.login}>login</button>
                <button onClick={this.logout}>logout</button>
            </div>
        )
    }
}
