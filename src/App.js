import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import ChildComponent from './Greet.js';
import Button from '@material-ui/core/Button';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
class App extends Component {
  
  render() {
    var divStyle = {
      "margin-left": "400px",
     "margin-top": "30px"
     };
     var wdth ={
      width: '176px'
     }
    return (
    
      <div class ="aligner">
        <span>
   <Link to="/releasemanagement"> <button  type="button" class="btn btn-success">ReleaseManagement</button></Link>
   <Link to = "/componentversion"> <button  type="button" class="btn btn-success">ComponentVersion</button></Link>
    </span>
         </div>
         

     
    );
  }
}

export default App;
