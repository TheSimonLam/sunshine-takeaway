import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './App.css';

import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              <div>
                  <header>
                      <div className="header-logo-container"><img className="header-logo" src={require('./img/logo.png')} alt={"Logo"} /></div>
                      <div className="header-buttons-container">
                          <Link className="header-link" to="/">Home</Link>
                          <Link className="header-link" to="/menu">Menu</Link>
                          <Link className="header-link" to="/about">About</Link>
                      </div>
                  </header>

                  <Route exact path="/" component={Home}/>
                  <Route path="/menu" component={Menu}/>
                  <Route path="/about" component={About}/>
              </div>
          </Router>

          <footer>
          </footer>
      </div>
    );
  }
}

export default App;
