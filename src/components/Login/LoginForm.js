import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import history from '../../Routing/history'


export class LoginForm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Login"  />
          <TextField
            hintText="Enter your email"
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your password"
            floatingLabelText="Password"
            onChange={handleChange("password")}
            defaultValue={values.password}
          />
          <br />
          <RaisedButton
            label="Log in"
            primary={true}
            style={styles.button}
            onClick={() => history.push("/home")}
            
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}


const styles = {
  button: {
    margin: 15,
  }, 

};

export default LoginForm;
