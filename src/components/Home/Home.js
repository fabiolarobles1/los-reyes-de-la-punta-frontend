import React, { Component } from "react";
import logo from "../../assets/uprmLogo.png";
import "./Home.css";

class home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <p>Bienvenidos a UPRM.</p>
          <a
            className="Home-link"
            href="https://www.uprm.edu/portada/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
        </header>
      </div>
    );
  }
}

export default home;
