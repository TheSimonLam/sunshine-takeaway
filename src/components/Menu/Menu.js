import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <img style={{ width: "100%" }} src="https://sunshine-takeaway-menu-pdf.s3.eu-west-1.amazonaws.com/menu-1.png"></img>
        <img style={{ width: "100%" }} src="https://sunshine-takeaway-menu-pdf.s3.eu-west-1.amazonaws.com/menu-2.png"></img>
      </div>
    );
  }
}

export default Menu;
