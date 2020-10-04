import React, { Component } from "react";
import history from "../../Routing/history";
import logo from "../../assets/uprmLogo.png";
import "../Home/Home.css";
import "./SignUp.css";
import SignUpForm from "./SignUpForm";

export class SignUp extends Component {
  state = {
    firstName : "",
    lastName: "",
    studentNumber: "",
    email: "",
    degree: "",
    password: "",
    confirmPassword: "",
    invalidInput: false,
  }
  //Handle fields change
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  validateFields = () => {
    // validate that all input fields have been filled in properly
    const emailRegex = new RegExp("/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/");
    if (this.state.firstName.length === 0
        || this.state.lastName.length === 0
        || this.state.studentNumber.charAt(this.state.studentNumber.length-1) === '_'
        || this.state.email.length === 0
        || emailRegex.test(this.state.email)
        || this.state.degree.length === 0
        || this.state.degree === "select"
        || this.state.password.length === 0
        || this.state.confirmPassword.length === 0
        || this.state.password !== this.state.confirmPassword) {

      this.state.invalidInput = true;
      return false;
    }else{
      this.state.invalidInput = false;
      return true;
    }
    
  };

  handleSubmit = (e) => {
    console.log(this.validateFields());
  };

  render() {
    const {firstName, lastName, studentNumber, email, degree, password, confirmPassword} = this.state
    const values = {firstName, lastName, studentNumber, email, degree, password, confirmPassword}
    return (
      <div className="SignUp">
        <div className="topnav">
          <p>
            {" "}
            Sign up for a UPRM account
            <a href ="" onClick={() => history.push("/")}>Log In</a>
          </p>
        </div>
        <div className="SignUp-header">
          <br />
          <img src={logo} className="Home-logo" alt="logo" />
          <br />
          <SignUpForm handleChange={this.handleChange} values={values} />
        </div>
        <button className="signupbutton" onClick={this.handleSubmit}>
          Sign Up
        </button>
      </div>
    );
  }
}

export default SignUp;
