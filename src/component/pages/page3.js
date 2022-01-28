import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class page3 extends Component {
    // constructor({match}) {
    //     super()
    
    //     this.state = {
    //          myname:match.params.username
    //     }
    // }
    
    render() {
        if (sessionStorage.getItem('username')==null) {
            return <Redirect  to="/login" />
        }
        else {
            return (
                <div>
                    {/* <h1>{this.state.myname}</h1> */}
                    <h1>page 3</h1>
                </div>
            )
        }
        
    }
}
