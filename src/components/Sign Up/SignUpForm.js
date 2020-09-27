import React, { Component } from 'react'
import history from "../../Routing/history";
import "./SignUp.css";
import "./SignUpForm.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

export class SignUpForm extends Component {
    state = {
        isRevealedPassword: false,
        isRevealedConfirmPassword: false,
    };

    togglePassword = (e) => {
        this.setState({isRevealedPassword: !this.state.isRevealedPassword});
    };

    toggleConfirmPassword = (e) => {
        this.setState({isRevealedConfirmPassword: !this.state.isRevealedConfirmPassword});
    };

    render() {
        const {values, handleChange} = this.props;
        const {isRevealedPassword, isRevealedConfirmPassword} = this.state;

        return (
            <div>
                <form>
                    <input type="firstName" placeholder="name" onChange={handleChange('firstName')} defaultValue={values.firstName}/>
                    <br/>
                    <input type="LastName" placeholder="last name" onChange={handleChange('lastName')} defaultValue={values.LastName}/>
                    <br/>
                    <input type="studentNumber" placeholder="student number" onChange={handleChange('studentNumber')} defaultValue={values.studentNumber}/>
                    <br/>
                    <input type="email" placeholder="email" onChange={handleChange('email')} defaultValue={values.email}/>
                    <br/>
                    <select type="degree" onChange={handleChange('degree')} defaultValue={values.degree}>
                        <option value="select">select your degree</option>
                        <option value="inso">Software Engineering</option>
                        <option value="ciic">Computer Science and Engineering</option>
                        <option value="icom">Computer Engineering</option>
                    </select>
                    <div style={{'position': 'relative'}}>
                        <input type={isRevealedPassword ? "unhiddenPassword" : "password"} placeholder="password" onChange={handleChange('password')} defaultValue={values.password}/>
                        <span onClick={this.togglePassword}>
                            <span>
                                {isRevealedPassword ? <FontAwesomeIcon icon= {faEye} className= "hiddenIcon" />:
                                <FontAwesomeIcon icon= {faEyeSlash} className= "hiddenIcon" />}
                            </span>
                        </span>
                    </div>
                    <div style={{'position': 'relative'}}>
                        <input type={isRevealedConfirmPassword ? "unhiddenPassword" : "password"} placeholder="confirm password" onChange={handleChange('confirmPassword')} defaultValue={values.confirmPassword}/>
                        <span onClick={this.toggleConfirmPassword}>
                            <span>
                                {isRevealedConfirmPassword ? <FontAwesomeIcon icon= {faEye} className= "hiddenIcon" />:
                                <FontAwesomeIcon icon= {faEyeSlash} className= "hiddenIcon" />}
                            </span>
                        </span>
                    </div>
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