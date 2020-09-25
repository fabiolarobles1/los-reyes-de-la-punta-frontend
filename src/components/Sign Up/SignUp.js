import React, { Component } from "react";
import MainForm from "../Login/MainForm";

export class SignUp extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  
  render() {
    return (
      <div>
        <MainForm />
      </div>
    );
  }
}

export default SignUp;
