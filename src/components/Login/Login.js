import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import history from "../../Routing/history";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <header className="Login-header">
          <p>Hello, this is the log in screen.</p>
          <Button variant="contained" color="primary" onClick={() => history.push("/home")} >
            Home
          </Button>
        </header>
      </div>
    );
  }
}

export default Login;
