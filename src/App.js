import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import SampleViewer from './components/extra/samples-viewer';
import VarViewer from './components/main/var-viewer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1 className="mainTitle">Variance Viewer</h1>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/'} className="nav-link">Main</Link>
              </li>
              <li className="nav-item">
                <Link to={'/samples'} className="nav-link">Samples</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path = '/' component= {VarViewer} />
            <Route path= '/samples' component = {SampleViewer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
