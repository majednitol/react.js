import React, { Component } from 'react'
import ReactTable from 'react-table'


export default class reactTable extends Component {
    
    render() {
        const data = [{name: 'majed',age: 20},{name: 'majed',age: 20},{name: 'majed',age: 20}]
        const col =[{Header:"name",accessor:"name"},{Header:"age",accessor:"age"}]
        return (
            <div>
              <ReactTable
              data={data}
              columns={col}
              defaultPageSize={2}
              PageSizeOptions={[2,4,6,8]}
              
              />
        

              
            </div>
        )
    }
}
