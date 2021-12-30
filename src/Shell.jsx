import React from 'react'
import StudentListing from './StudentListing'
import StudentTable from './StudentTable'

function Shell() {
    return (
        <div style={{
            backgroundColor:'#e6ffcc',
            width:'100%',
            height:'100vh'
            }}>
       inside Shell Component
       <StudentListing/> 
       {/* <StudentTable/>     */}
        </div>
    )
}

export default Shell
