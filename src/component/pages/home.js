import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class home extends Component {
    render() {
        if(sessionStorage.getItem("username")==null){
            return <Redirect to="/login" />
        }
        else{
            return (
                <div>
                    <h1>this is a home</h1>
                </div>
            )
        }
        
    }
}
