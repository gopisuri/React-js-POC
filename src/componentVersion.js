import React, { Component } from 'react';
import './App.css';

class CompData extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'Dev',
          isDev: true,
          isDemo:false,
          isPiolt:false
      };
     this.handleOptionChange = this.handleOptionChange.bind(this);
this.handleFormSubmit = this.handleFormSubmit.bind(this);
}
 
  handleOptionChange(changeEvent)
  {
  if(changeEvent.target.value === 'Dev')
  {
    this.setState({
      isDev: true,
      isDemo: false,
      isPiolt:false
    });
  }
  else if(changeEvent.target.value === 'Demo'){
    this.setState({
      isDev: false,
      isDemo: true,
      isPiolt:false
    });
  }
  else{
    this.setState({
      isPiolt:true,
      isDev: false,
      isDemo:false
    });
   
  }
 
    this.setState({
      selectedOption: changeEvent.target.value,
    });
    
  }

  handleFormSubmit(formSubmitEvent)
   {
    formSubmitEvent.preventDefault();

    console.log('You have selected:', this.state.selectedOption);
    
  }
    render() 
    {
        var tab={
            border : "1px solid black",
            width:"60%",
            "margin-left": "280px",
            "margin-top": "10px"
          }
       var trr =
       {
        "margin-left": "185px"
       }
       var spn={
        "margin-left": "280px",
        color:"green"
       }
       const isDev = this.state.isDev;
       const isDemo = this.state.isDemo;
       const isPiolt = this.state.isPiolt;
       if(isDev){
     return(
<div >
<div className="container">
       <form onSubmit={this.handleFormSubmit}>
   <div className="row" style = {trr}>
              <div className="radio">
                LandScape:&nbsp;
                <label>
                  <input type="radio" value="Dev" checked={this.state.selectedOption === 'Dev'} onChange={this.handleOptionChange} />
                 Dev
                </label>
              </div>&nbsp;
              <div className="radio">
                <label>
                  <input type="radio" value="Demo" checked={this.state.selectedOption === 'Demo'} onChange={this.handleOptionChange}/>
                  Demo
                </label>
              </div>&nbsp;
              <div className="radio">
                <label>
                  <input type="radio" value="Pilot/Production" checked={this.state.selectedOption === 'Pilot/Production'} onChange={this.handleOptionChange}/>
                Pilot/Production
                </label>
              </div>
              </div>
            </form>
           
            </div>
        <span style = {spn}>Dev table</span>    
<table style = {tab}>
  <tr style = {tab}>
  
    <th>Dev Tag</th>
    <th>Dev DockerImage</th>
    <th>Action</th>
  </tr>
  <tr>
    
    <td>DummyComponent</td>
    <td>1.2.0</td>
   <td><a href="">update|&nbsp;Delete</a></td> 
  </tr>
  <tr>
   
    <td>DummyComponent 2.0</td>
    <td>1.2.3</td>
    <td><a href="">update|&nbsp;Delete</a></td> 
  </tr>
  <tr>
   
    <td>Roland Mendel</td>
    <td>2.1.0</td>
    <td><a href="">update|&nbsp;Delete</a></td> 
  </tr>
  <tr>
  
    <td>Helen Bennett</td>
    <td>2.1.5</td>
    <td><a href="">update|&nbsp;Delete</a></td> 
  </tr>
  <tr>
 
    <td>Yoshi Tannamuri</td>
    <td>2.1.6</td>
    <td><a href="">update|&nbsp;Delete</a></td> 
  </tr>
 
</table>
    </div>
     );
    }
    if(isDemo)
    {
      return(
        <div >
        <div className="container">
               <form onSubmit={this.handleFormSubmit}>
           <div className="row" style = {trr}>
                      <div className="radio">
                        LandScape:&nbsp;
                        <label>
                          <input type="radio" value="Dev" checked={this.state.selectedOption === 'Dev'} onChange={this.handleOptionChange} />
                         Dev
                        </label>
                      </div>&nbsp;
                      <div className="radio">
                        <label>
                          <input type="radio" value="Demo" checked={this.state.selectedOption === 'Demo'} onChange={this.handleOptionChange}/>
                          Demo
                        </label>
                      </div>&nbsp;
                      <div className="radio">
                        <label>
                          <input type="radio" value="Pilot/Production" checked={this.state.selectedOption === 'Pilot/Production'} onChange={this.handleOptionChange}/>
                        Pilot/Production
                        </label>
                      </div>
                      </div>
                    </form>
                   
                    </div>
                    <span style = {spn}>Demo table</span>                
        <table style = {tab}>
          <tr style = {tab}>
          
            <th>Demo Tag</th>
            <th>Demo DockerImage</th>
            <th>Action</th>
          </tr>
          <tr>
            
            <td>DummyComponent</td>
            <td>1.2.0</td>
           <td><a href="">update|&nbsp;Delete</a></td> 
          </tr>
          <tr>
           
            <td>DummyComponent 2.0</td>
            <td>1.2.3</td>
            <td><a href="">update|&nbsp;Delete</a></td> 
          </tr>
          <tr>
           
            <td>Roland Mendel</td>
            <td>2.1.0</td>
            <td><a href="">update|&nbsp;Delete</a></td> 
          </tr>
          <tr>
          
            <td>Helen Bennett</td>
            <td>2.1.5</td>
            <td><a href="">update|&nbsp;Delete</a></td> 
          </tr>
          <tr>
         
            <td>Yoshi Tannamuri</td>
            <td>2.1.6</td>
            <td><a href="">update|&nbsp;Delete</a></td> 
          </tr>
         
        </table>
            </div>
             );
    }
    if(isPiolt)
    {
      return(
        <div >
        <div className="container">
               <form onSubmit={this.handleFormSubmit}>
           <div className="row" style = {trr}>
                      <div className="radio">
                        LandScape:&nbsp;
                        <label>
                          <input type="radio" value="Dev" checked={this.state.selectedOption === 'Dev'} onChange={this.handleOptionChange} />
                         Dev
                        </label>
                      </div>&nbsp;
                      <div className="radio">
                        <label>
                          <input type="radio" value="Demo" checked={this.state.selectedOption === 'Demo'} onChange={this.handleOptionChange}/>
                          Demo
                        </label>
                      </div>&nbsp;
                      <div className="radio">
                        <label>
                          <input type="radio" value="Pilot/Production" checked={this.state.selectedOption === 'Pilot/Production'} onChange={this.handleOptionChange}/>
                        Pilot/Production
                        </label>
                      </div>
                      </div>
                    </form>
                   
                    </div>
                    <span style = {spn} >pilot/Production table</span>     
        <table style = {tab}>
          <tr style = {tab}>
          
            <th>pilot/Production Tag</th>
            <th>pilot/Production DockerImage</th>
            <th>Action</th>
          </tr>
          <tr>
            
            <td>DummyComponent</td>
            <td>1.2.0</td>
           <td><a href="">update|&nbsp;Delete</a></td> 
          </tr>
          <tr>
           
            <td>DummyComponent 2.0</td>
            <td>1.2.3</td>
            <td><a href="">update|&nbsp;Delete</a></td> 
          </tr>
          <tr>
           
            <td>Roland Mendel</td>
            <td>2.1.0</td>
            <td><a href="">update|&nbsp;Delete</a></td> 
          </tr>
          <tr>
          
            <td>Helen Bennett</td>
            <td>2.1.5</td>
            <td><a href="">update|&nbsp;Delete</a></td> 
          </tr>
          <tr>
         
            <td>Yoshi Tannamuri</td>
            <td>2.1.6</td>
            <td><a href="">update|&nbsp;Delete</a></td> 
          </tr>
         
        </table>
            </div>
             );
    }
    }
  }
  export default CompData;