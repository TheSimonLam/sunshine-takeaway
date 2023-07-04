import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Popup from "./components/Popup/Popup";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header>
              <div className="header-logo-container">
                <img
                  className="header-logo"
                  src={require("./img/logo.png")}
                  alt={"Logo"}
                />
              </div>
              <div className="header-buttons-container">
                <Link className="header-link" to="/">
                  Home
                </Link>
                <a
                  className="header-link"
                  target="_blank"
                  href="https://sunshine-takeaway-menu-pdf.s3.eu-west-1.amazonaws.com/sunshine-takeaway-menu.pdf"
                >
                  Menu
                </a>
                <Link className="header-link" to="/about">
                  About
                </Link>
              </div>
            </header>

            <Popup/>

            <div className="cookie-notice-wrapper">
              <span>
                This site uses cookies to help improve user experience. By
                continuing to use this site, you agree to let us use cookies.
              </span>
            </div>

            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/about" component={About} />
          </div>
        </Router>

        <footer>
          <div className="footer-wrapper">
            Site created by Simon Lam. © 2018 | Sunshine Takeaway. All Rights Reserved.
          </div>
        </footer>
      </div>
    );
  }
  componentDidMount() {
    if (document.cookie.indexOf("sun-cookie=true") > -1) {
      document.getElementsByClassName(
        "cookie-notice-wrapper"
      )[0].style.display = "none";
    }
    document.cookie = "sun-cookie=true";
  }
}

export default App;
