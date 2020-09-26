import React, { Component } from 'react'
import history from "../../Routing/history";
import "./SignUp.css";
import "./SignUpForm.css";

export class SignUpForm extends Component {
    render() {
        return (
            <div>
                <h1>Form</h1>
                <button className="signupbutton" onClick={() => history.push("/home")}>
                    Sign Up
                </button>
            </div>
        )
    }
}

export default SignUpForm