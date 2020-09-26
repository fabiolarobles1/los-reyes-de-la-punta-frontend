import React, { Component } from "react";
import history from "../../Routing/history";
import logo from "../../assets/uprmLogo.png";
import "../Home/Home.css";
import "./SignUp.css";
import SignUpForm from "./SignUpForm";

export class SignUp extends Component {
  state = {
    firstName : '',
    lastName: '',
    studentNumber: '',
    email: '',
    degree: '',
    password: ''
  }
  //Handle fields change
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  render() {
    const { firstName, lastName, studentNumber, email, degree,  password} = this.state
    const values = { firstName, lastName, studentNumber, email, degree,  password}
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
      </div>
    );
  }
}

export default SignUp;
