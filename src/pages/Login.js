import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <>
      <div className="auth-nav">
        <a href="html/index.html" className="logo-link nk-sidebar-logo">
          <img
            className="logo-img "
            src="https://pecunia.lendsqr.com/assets/logo.svg"
            alt="logo"
          />
        </a>
      </div>
      {/* <!-- main @s --> */}
      <div className="big-container">
        <div className="auth-illustration">
          <img src="./assets/images/pablo-sign-in 1.png" />
        </div>

        <div className="auth-form">
          <div className="form">
            <h1 className="auth_form--header text-secondary">Welcome!</h1>
            <p className="auth_form--subheader">Enter details to login.</p>
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                />
                {/* <small>Input field is empty</small> */}
              </div>
              <div className="form-group">
                <div className="password-field">
                  <input
                    className="form-control"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                  <button className="btn btn-link" type="button">
                    Show
                  </button>
                </div>
              </div>
              <div className="forgot-btn">
                <a href="" className="btn-ref btn-link">
                  Forgot Password
                </a>
                <a href="" className="btn-ref btn-link">
                  Sign up
                </a>
              </div>
              <button className="btn btn-primary btn-block" type="submit">
                LOG IN
              </button>
            </form>
          </div>
        </div>

        {/* <!-- .nk-split-content --> */}
        {/* <div className="split-right nk-split-stretch bg-white p-5 d-flex justify-center align-center flex-column">
          <div className="wide-xs-fix">
            <form className="" action="">
              <h3 className="title mb-3">Welcome</h3>
              <p className="title mb-3">Enter details to login</p>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="form-label" for="sv1-first-name">
                      First Name
                    </label>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        className="form-control"
                        name="sv1-first-name"
                        placeholder="First name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="form-label" for="sv1-last-name">
                      Last Name
                    </label>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        className="form-control"
                        name="sv1-last-name"
                        placeholder="Last name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label className="form-label" for="sv1-email-address">
                      Email Address
                    </label>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        className="form-control"
                        name="sv1-email-address"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div> */}
      </div>
      {/* <!-- .nk-split-content --> */}
      {/* <!-- .nk-split --> */}

      {/* <!-- wrap @e --> */}
    </>
  );
};

export default Login;
