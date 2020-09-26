import React, { Component } from 'react'
import history from "../../Routing/history";
import "./SignUp.css";
import "./SignUpForm.css";

export class SignUpForm extends Component {
    render() {
        const {values, handleChange} = this.props;
        return (
            <div>
                <form>
                    <input type="firstName" placeholder="name" onChange={handleChange('firstName')} defaultValue={values.firstName}/>
                    <div style={{'position': 'relative'}}></div>
                    <input type="LastName" placeholder="last name" onChange={handleChange('lastName')} defaultValue={values.LastName}/>
                    <div style={{'position': 'relative'}}></div>
                    <input type="studentNumber" placeholder="student number" onChange={handleChange('studentNumber')} defaultValue={values.studentNumber}/>
                    <div style={{'position': 'relative'}}></div>
                    <input type="email" placeholder="email" onChange={handleChange('email')} defaultValue={values.email}/>
                    <div style={{'position': 'relative'}}></div>
                    <select type="degree" onChange={handleChange('degree')} defaultValue={values.degree}>
                        <option value="select">select your degree</option>
                        <option value="inso">Software Engineering</option>
                        <option value="ciic">Computer Science and Engineering</option>
                        <option value="icom">Computer Engineering</option>
                    </select>
                    <div style={{'position': 'relative'}}></div>
                    <input type="password" placeholder="password" onChange={handleChange('password')} defaultValue={values.password}/>
                    <div style={{'position': 'relative'}}></div>
                    <input type="password" placeholder="confirm password" onChange={handleChange('confirmPassword')} defaultValue={values.confirmPassword}/>
                </form>
                <br />
                <button className="signupbutton" onClick={() => history.push("/home")}>
                    Sign Up
                </button>
            </div>
        )
    }
}

export default SignUpForm