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
    errorMessage: ""
  }
  //Handle fields change
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  validateFields = () => {
    // regex to check that the email input follows the correcto format
    let emailRegex = new RegExp("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}");
    // array to store string corresponding to the incorrect input fields
    let errorArray = [];
    // if nothing was typed into first name
    if (this.state.firstName.length === 0) { 
      errorArray.push("first name");
    }
    // if nothing was typed into last name
    if (this.state.lastName.length === 0) { 
      errorArray.push("last name");
    }
    // if nothing was typed into student number OR the student number was not fully typed
    if (this.state.studentNumber.length === 0 || this.state.studentNumber.charAt(this.state.studentNumber.length-1) === '_') {
      errorArray.push("student number");
    }
    // if nothing was typed into email OR the email does not follow the correct format
    if (this.state.email.length === 0 || !emailRegex.test(this.state.email)) {
      errorArray.push("email");
    }
    // if nothing was selected in degree OR "select your degree" was selected
    if (this.state.degree.length === 0 || this.state.degree === "select") {
      errorArray.push("degree");
    }
    // if nothing was typed into password
    if (this.state.password.length === 0) {
      errorArray.push("password");
    }
    // if nothing was typed into confirm password
    if (this.state.confirmPassword.length === 0) {
      errorArray.push("confirm password");
    }
    // if password and confirm password don't matck
    if (this.state.password !== this.state.confirmPassword) {
      errorArray.push("password dont't match");
    }

    // if array length is larger that 0, then we encountered an error with one of the input fields
    if (errorArray.length > 0) {
      // construct error message string
      let errorString = "Invalid input: ";
      if (errorArray.length === 1) { // if we only encountered and error
        errorString += errorArray[0] + ".";
      } else {
        for (var i = 0; i < errorArray.length; i += 1) {
          if (i === errorArray.length-1) { // if i is the index of the last element in errorArray
            errorString += "and " + errorArray[i] + ".";
          } else {
            errorString += errorArray[i] + ", ";
          }
        }
      }
      // update error message
      this.state.errorMessage = errorString;
      this.setState({[this.state.errorMessage]: errorString});

      return false;
    } else { // we encountered no error
      // clear error message
      this.state.errorMessage = "";
      this.setState({[this.state.errorMessage]: ""});
      
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
          <label> { this.state.errorMessage } </label>
        </div>
        <button className="signupbutton" onClick={this.handleSubmit}>
          Sign Up
        </button>
      </div>
    );
  }
}

export default SignUp;
