import React from "react";

function StudentListing() {
  return (
    <div style={{
        backgroundColor:'#ffffcc',
        width:'100%',
        height:'100vh'
        }}>
Inside StudentListing.js
<center><h1>Students List</h1></center>
      <ul style={{
          listStyleType:'none',
          fontSize:20,
          fontWeight:400,
          textAlign:'center'
      }}>
        <li>Muhammad Fahad Siddiqui</li>
        <li>Shareh Akhter</li>
        <li>Khubaib Hussain Zuberi</li>
        <li>Shahzaib Ansari</li>
      </ul>
    </div>
  );
}

export default StudentListing;
