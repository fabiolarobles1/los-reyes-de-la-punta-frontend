import React, { Component } from "react";
import history from "../../Routing/history";
import "./LoginForm.css";

export class LoginForm extends Component {
  
  render() {
    const { values, handleChange } = this.props;

    return (
      <div>
        <form>
          <input type="text" placeholder="email" onChange= {handleChange('email')} defaultValue={values.email}/>
          <p />
          <input type="password" placeholder="password" onChange= {handleChange('password')}  defaultValue= {values.password}/>
          {/*Maybe eliminate password from state for security*/}

          <div className="instructions">
            <a
              href="https://portal.upr.edu/rum/portal.php?a=ras_psr_start"
              target="_blank"
              rel="noopener noreferrer"
            >
              Forgot password?
            </a>
            <p>
              Log in using your email and password provided by the university.
            </p>
          </div>
        </form>
        <button className="loginbutton" onClick={() => history.push("/home")}>
          Log in
        </button>
      </div>
    );
  }
}

export default LoginForm;
