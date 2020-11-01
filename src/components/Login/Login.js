import React, { Component } from "react";
import logo from "../../assets/uprmLogo.png";
import history from "../../Routing/history";
import "../Home/Home.css";
import "./Login.css";
import LoginForm from "./LoginForm";
import axios from "axios";
import jwt_decode from "jwt-decode";

class Login extends Component {
  state = {
    email: "",
    password: "",
    invalidInput: false,
    errorMessage: "",
  };

  validateFields = () => {
    // regex to check that the email input follows the correct format
    let emailRegex = new RegExp(
      "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}"
    );
    // array to store string corresponding to the incorrect input fields
    let errorArray = [];

    // if nothing was typed into email OR the email does not follow the correct format
    if (this.state.email.length === 0 || !emailRegex.test(this.state.email)) {
      errorArray.push("email");
    }

    // if nothing was typed into password
    if (this.state.password.length === 0) {
      errorArray.push("password");
    }

    // if array length is larger that 0, then we encountered an error with one of the input fields
    if (errorArray.length > 0) {
      // construct error message string
      let errorString = "Invalid input: ";
      if (errorArray.length === 1) {
        // if we only encountered and error
        errorString += errorArray[0] + ".";
      } else {
        for (var i = 0; i < errorArray.length; i += 1) {
          if (i === errorArray.length - 1) {
            // if i is the index of the last element in errorArray
            errorString += "and " + errorArray[i] + ".";
          } else {
            errorString += errorArray[i] + ", ";
          }
        }
      }
      // update error message
      this.state.errorMessage = errorString;
      this.setState({ [this.state.errorMessage]: errorString });
      this.setState({ invalidInput: false });
      return false;
    } else {
      // we encountered no error
      // clear error message
      this.state.errorMessage = "";
      this.setState({ [this.state.errorMessage]: "" });
      this.setState({ invalidInput: true });
      return true;
    }
  };

  //Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
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
          localStorage.setItem("token", res.data.access_token);
          console.log("Access token: ", res.data.access_token);
          console.log(
            "Decoded token: ",
            jwt_decode(localStorage.getItem("token"))
          );
          this.props.history.push("/home");
        })
        .catch((err) => {
          this.state.errorMessage =
            "Try Again: email and password do not match.";
          this.setState({
            [this.state.errorMessage]:
              "Try Again: email and password do not match.",
          });
          console.log(err);
        });
    } else {
      console.log(this.validateFields());
    }
  };

  render() {
    const { email, password } = this.state;
    const values = { email, password };
    return (
      <div className="Login">
        <div className="topbar">
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
          <br />
          <LoginForm handleChange={this.handleChange} values={values} />
          <label> {this.state.errorMessage} </label>
        </div>
        <button className="loginbutton" onClick={this.handleSubmit}>
          Log in
        </button>
      </div>
    );
  }
}

export default Login;
