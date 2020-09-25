import React, { Component } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from '../Sign Up/SignUpForm';

export class MainForm extends Component {
    state = {
        step: 1,
        firstName : '',
        lastName: '',
        studentNumber: '',
        email: '',
        degree: '',
        password: ''
    }
    
    //Proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

     //Back to prev state
     prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }
    

    //Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }


    render() {
        const {step} = this.state;
        const { firstName, lastName, studentNumber, email, degree,  password} = this.state
        const values = { firstName, lastName, studentNumber, email, degree,  password}
        switch(step)  {
            case 1:
                return(
                   <LoginForm 
                        nextStep = {this.nextStep}
                        handleChange={this.handleChange}
                        values = {values}
                   /> 
                )
            case 2:
                return <SignUpForm
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange={this.handleChange}
                values = {values}
                />
        }
    }
}

export default MainForm
