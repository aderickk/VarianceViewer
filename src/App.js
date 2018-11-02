import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import SampleViewer from './components/extra/samples-viewer';
import VarViewer from './components/main/var-viewer';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="container">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous">
        </link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" 
            integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossOrigin="anonymous"></link>
        <Navbar inverse fluid collapseOnSelect className="navbar-expand-md">
          <Navbar.Header>
            <Navbar.Brand>Variance Viewer</Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav bsStyle="pills" pullRight>
              <NavItem href='/'> Main Page </NavItem>
              <NavItem href='/samples'> Samples </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path = '/' component= {VarViewer} />
          <Route path= '/samples' component = {SampleViewer}/>
        </Switch>
        </div>
    );
  }
}

export default App;
