import React, { Component } from "react";
import logo from "../../assets/uprmLogo.png";
import history from "../../Routing/history";
import "../Home/Home.css";
import "./Login.css";
import LoginForm from "./LoginForm";
import axios from "axios";

class Login extends Component {
  state = {
    email: "",
    password: "",
    invalidInput: false,
  };

  //Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  validateFields = () => {
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      this.state.invalidInput = true;
      return false;
    }else{
      this.state.invalidInput = false;
      return true;
    }
    
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    if (this.validateFields()) {
      axios
        .post("login", data)
        .then((res) => {
          console.log(res.data.access_token);
          localStorage.setItem("token", res.data.access_token);
          history.push("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    }else{
      console.log("FATAL");
    }
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
            <a href="signup" onClick={() => history.push("/signup")}>
              Sign Up
            </a>
          </p>
        </div>
        <div className="Login-header">
          <br />
          <img src={logo} className="Home-logo" alt="logo" />
          <br/>
          <LoginForm handleChange={this.handleChange} values={values} />
        </div>
        <button className="loginbutton" onClick={this.handleSubmit}>
          Log in
        </button>
      </div>
    );
  }
}

export default Login;
