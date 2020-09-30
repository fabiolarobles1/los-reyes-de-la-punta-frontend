import React, { Component } from "react";
import history from "../../Routing/history";
import "./LoginForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export class LoginForm extends Component {
  state = {
    isRevealedPassword: false,
  };

  togglePassword = (e) => {
    this.setState({ isRevealedPassword: !this.state.isRevealedPassword });
  };

  render() {
    const { values, handleChange } = this.props;
    const { isRevealedPassword } = this.state;

    return (
      <div>
        <form>
          <div className="input-container">
            <input
              type="text"
              placeholder="email"
              onChange={handleChange("email")}
              defaultValue={values.email}
            />
          </div>
          <div className="input-container">
            <input
              type={isRevealedPassword ? "text2" : "password"}
              placeholder="password"
              onChange={handleChange("password")}
              defaultValue={values.password}
            />
            <span onClick={this.togglePassword}>
              <span>
                {isRevealedPassword ? (
                  <FontAwesomeIcon icon={faEye} className="customIcon" />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} className="customIcon" />
                )}
              </span>
            </span>
          </div>
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
