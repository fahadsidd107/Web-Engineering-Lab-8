import React from 'react'
function StudentTable() {
    return (
        <div>
            <div style={{
        backgroundColor:'#ffffcc',
        width:'100%',
        height:'100vh'
        }}>
Inside StudentListing.js
<center><h1>Students Table</h1></center>
<table style={{
          fontSize:20,
          fontWeight:400,
          textAlign:'center',
          marginLeft:'auto',
          marginRight:'auto',
      }}>
  <tr>
    <th>Student Name</th>
    <th>Date of Birth</th>
    <th>Town</th>
  </tr>
  <tr>
    <td>Muhammad Fahad Siddiqui</td>
    <td>10 December 1998</td>
    <td>Liaquatabad</td>
  </tr>
  <tr>
    <td>Shareh Akhter</td>
    <td>15 January 1999</td>
    <td>Gulshan E Iqbal</td>
  </tr>
  <tr>
    <td>Muhammad Khubaib Hussain Zuberi</td>
    <td>13 February 1998</td>
    <td>Gulistan E Johar</td>
  </tr>
  <tr>
    <td>Shahzaib Ansari</td>
    <td>6 February 2000</td>
    <td>Liaquatabad</td>
  </tr>
</table>
    </div>
        </div>
    )
}

export default StudentTable
