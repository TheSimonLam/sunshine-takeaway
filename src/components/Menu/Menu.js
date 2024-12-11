import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <object
          data="https://sunshine-takeaway-menu-pdf.s3.eu-west-1.amazonaws.com/sunshine-takeaway-menu.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>
            It appears you don't have a PDF plugin for this browser. No
            biggie... you can{" "}
            <a href="https://sunshine-takeaway-menu-pdf.s3.eu-west-1.amazonaws.com/sunshine-takeaway-menu.pdf">
              click here to download the PDF file.
            </a>
          </p>
        </object>
      </div>
    );
  }
}

export default Menu;
