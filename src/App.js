import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import VarViewer from './components/variance-viewer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1>Variance Viewer</h1>
          <Switch>
            <Route exact path = '/' component={VarViewer} />
          </Switch>
        </div>
      </Router>      
    );
  }
}

export default App;
