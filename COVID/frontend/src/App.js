import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button,Jumbotron } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import daily from "./Components/daily-update.components"
import symcure from "./Components/Symptoms-cure-latest-stuff.components"
import testing from "./Components/testing.components"
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class App extends Component {
  render() {
    
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" target="_blank">
              <FontAwesomeIcon icon={faExclamationTriangle} size="2x" />
            </a>
            <Link to="/" className="navbar-brand">COVID-19</Link>
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