import React, { Component } from "react";
import logo from "../../assets/uprmLogo.png";
import history from "../../Routing/history";
import "../Home/Home.css";
import "./Login.css";
import LoginForm from "./LoginForm";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  //Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    const values = { email, password };
    return (
      <div className="Login">
        <div className="topnav">
          <p>
            {" "}
            Welcome to the UPRM enrollment system.
            <a href ="signup" onClick={() => history.push("/signup")}>Sign Up</a>
          </p>
        </div>
        <div className="Login-header">
          <br />
          <img src={logo} className="Home-logo" alt="logo" />
          <br />
          <LoginForm handleChange={this.handleChange} values={values} />
        </div>
      </div>
    );
  }
}

export default Login;
