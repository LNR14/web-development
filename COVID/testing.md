import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button,Jumbotron } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import daily from "./Components/daily-update.components"
import symcure from "./Components/Symptoms-cure-latest-stuff.components"
import testing from "./Components/testing.components"

class App extends Component {
  render() {
    
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">COVID</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/search" className="nav-link">Search</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/sym-cure" className="nav-link">Symptoms and cure</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/testing" className="nav-link">Testing</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/search" exact component={daily} />
          <Route path="/sym-cure" exact component={symcure} />
          <Route path="/testing" exact component={testing} />
        </div>
      </Router>
    );
  }
}

export default App;