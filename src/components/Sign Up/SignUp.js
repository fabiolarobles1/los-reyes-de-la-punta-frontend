import React, { Component } from "react";
import history from "../../Routing/history";
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
       this is the sign up form
       <SignUpForm handleChange={this.handleChange} values={values} />
      </div>
    );
  }
}

export default SignUp;
