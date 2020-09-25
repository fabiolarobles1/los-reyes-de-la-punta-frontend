import React, { Component } from "react";
import "./Login.css";
import MainForm from './MainForm'

class Login extends Component {
  render() {
    return (
      <div className="Login">
         <MainForm/>
        <br/>
          {/* <Button variant="contained" color="primary" onClick={() => history.push("/home")} >
            Home
          </Button>  */}
          {/*<header className="Login-header">
          {/* <p>Hello, this is the log in screen.</p>
        </header> */}
      </div>
    );
  }
}

export default Login;
