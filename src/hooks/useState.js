import React from 'react'
import {useState} from 'react'

 export default function Demo() {
    const [name,setName] =useState({
        country: 'US'
    })
   const change=()=>{
        setName({country:'bd'})
    }
    return (
        <div>
            <h1>{name.country}</h1>
            <button onClick={change}>change</button>
        </div>
    )
}
