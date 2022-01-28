import React, { Component } from 'react'
import {Naticonsumer} from './context'

export default class poti extends Component {
    render() {
        return (
            <div>
                <h1>
                    <Naticonsumer>
                        {msg => {
                        return msg
                    }
                    }</Naticonsumer>



                </h1>
            </div>
        )
    }
}

