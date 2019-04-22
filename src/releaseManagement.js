import React, { Component } from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class ReleaseManagement extends Component {
  
    render() {
      var tab={
        border : "1px solid black",
        width:"60%",
        "margin-left": "280px",
        "margin-top": "10px"
      }
     var tt ={
       "margin-left":"280px"
     }

     return (

<div>

<span style= {tt}>Please click to Insert<Link to="/reactform"> ReleaseManagement</Link></span>
<table style = {tab}>
  <tr style = {tab}>
    <th>ReleaseVersion</th>
    <th>Component</th>
    <th>Version</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>Alpha</td>
    <td>DummyComponent</td>
    <td>1.2.0</td>
   <td><a href="">update</a></td> 
  </tr>
  <tr>
    <td>Beta</td>
    <td>DummyComponent 2.0</td>
    <td>1.2.3</td>
    <td><a href="">update</a></td> 
  </tr>
  <tr>
    <td>Gama</td>
    <td>Roland Mendel</td>
    <td>2.1.0</td>
    <td><a href="">update</a></td> 
  </tr>
  <tr>
    <td>Alpha 2.0</td>
    <td>Helen Bennett</td>
    <td>2.1.5</td>
    <td><a href="">update</a></td> 
  </tr>
  <tr>
    <td>Beta 2.0</td>
    <td>Yoshi Tannamuri</td>
    <td>2.1.6</td>
    <td><a href="">update</a></td> 
  </tr>
 
</table>
</div>

     );

    
    }
  }
  
  export default ReleaseManagement