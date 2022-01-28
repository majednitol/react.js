import React, { Component } from 'react'
// import ReactTable from './reactTable.jsx'
import Nav from './component/navigation'
import Myroute from './component/myroute'
import { BrowserRouter } from 'react-router-dom'
import Change from './hooks/useState'
import Son from './component tree/son'
import {Dadaprovidor} from './component tree/context'
export default class App extends Component {
  render() {
    return (
      <div>

      <BrowserRouter>
      <Nav/>
     <Myroute/>
      </BrowserRouter>
        {/* <ReactTable/> */}
        <Change/>
        <Dadaprovidor value = "dada sent to poti">
          <Son/>
        </Dadaprovidor>
      </div>
    )
  }
}

