import React, { Component } from "react";
import logo from "../../assets/uprmLogo.png";
import "./Home.css";
import "../Login/Login.css";
import jwt_decode from "jwt-decode";
import history from '../../Routing/history';

class home extends Component {

  logout = () => {
    localStorage.clear();
    history.push("/");
  }

  render() {
    var decoded = jwt_decode(localStorage.getItem("token"));
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <p>Hola {decoded.stu_fname}.</p>
          <a
            className="Home-link"
            href="https://www.uprm.edu/portada/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
        </header>
        <button onClick={this.logout}>Log Out</button>
      </div>
    );
  }
}

export default home;
