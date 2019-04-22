import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
//ReactDOM.render(<App />, document.getElementById('root'));
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import FullWidthTabs from './tab';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ReleaseManagement from './releaseManagement';
import CompData from './componentVersion';
import ReactManagementForm from './ReactManagementForm';

//const theme = createMuiTheme({ typography: { useNextVariants: true } });

 const routing = (
    <Router>
      
        <Route path="/" component={App} />
        <Route path="/releasemanagement" component={ReleaseManagement} />
        <Route path="/componentversion" component={CompData} />
        <Route path="/reactform" component={ReactManagementForm} />
     
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
 /*ReactDOM.render((
    <ThemeProvider theme={theme}>
    <FullWidthTabs />
  </ThemeProvider>
 ), document.getElementById('root'));*/
 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

       