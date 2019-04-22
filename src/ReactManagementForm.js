import React, { Component } from 'react';
import './App.css';

class ReactManagementForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            releaseVersion : '',
            component : '',
            items : ''

                };
         this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({releaseVersion: event.target.releaseVersion});
    this.setState({component: event.target.component});
    this.setState({items: event.target.items});
  }

  handleSubmit(event) {
    alert('Data submitted: ' );
    event.preventDefault();
  }
    
    render() {
        var Align ={
            "margin-left":"300px"
        }
        var fieldalign3 = {
            "margin-left":"100px"
        }
        var fieldalign2 = {
            "margin-left":"56px"
        }
        var fieldalign1 = {
            "margin-left":"28px"
        }
        var buton ={
            "margin-left": "80px",
            "margin-top": "20px"
        }
        return (
            <div style = {Align}>
          <form onSubmit={this.handleSubmit}>
            <label>ReleaseVersion</label>
              <input style = {fieldalign1} type="text" name="name" value={this.state.releaseVersion} onChange={this.handleChange} /><br/>
              <label>Component</label>
              <input style = {fieldalign2} type="text" name="name" value={this.state.component} onChange={this.handleChange} /><br/>
              <label>Items</label>
              <input style = {fieldalign3} type="text" name="name" value={this.state.items} onChange={this.handleChange} /><br/>
              <input style = {buton} type="submit" class ="btn btn-primary" value="Submit" />
              
          </form>
          </div>
        );
      }
  }
  export default  ReactManagementForm