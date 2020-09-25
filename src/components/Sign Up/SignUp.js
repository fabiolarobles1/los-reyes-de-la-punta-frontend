import React, { Component } from "react";
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
      <div>
       This is the sign up page.
       <SignUpForm handleChange={this.handleChange} values={values} />
      </div>
    );
  }
}

export default SignUp;
