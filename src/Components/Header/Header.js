import React, { Component } from "react";
import "./Header.css";
import index from "./index.png";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header">
          <img alt="icon" className="header-img" src={index} />
          Houser
        </div>
      </header>
    );
  }
}

export default Header;
