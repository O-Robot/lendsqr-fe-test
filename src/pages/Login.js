import React, { useState } from "react";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordInput, setpasswordInput] = useState("");

  const passwordChange = (e) => {
    setpasswordInput(e.target.value);
  };

  const passwordToggle = () => {
    setShowPassword(!showPassword);
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <>
      <div className="login_container">
        <div className="login-first-half">
          <div className="logo-container">
            <img src="./assets/images/logo.svg" alt="logo" />
          </div>
          <img
            src="./assets/images/pablo-sign-in.svg"
            alt="pablo-sign-in"
            className="login-img"
          />
        </div>
        <div className="login-second-half">
          <div className="logo-container">
            <img src="./assets/images/logo.svg" alt="logo" />
          </div>
          <div className="login-form-container">
            <h4>Welcome!</h4>
            <p>Enter details to login.</p>
            <form className="login-form">
              <input placeholder="Email" />
              <div className="password-input-box">
                <input
                  placeholder="Password"
                  type={passwordType}
                  onChange={passwordChange}
                  value={passwordInput}
                />
                <span className="field-icon" onClick={passwordToggle}>
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
              <a href="/#">Forgot Password?</a>
              <button
                className="btn btn-green login-btn"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
