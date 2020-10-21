import React, { Component } from "react";

export default class Signin extends Component {
  render() {
    return (
      <main>
        <section className="vh-lg-100 bg-soft d-flex align-items-center">
          <div className="container">
            <div
              className="row justify-content-center form-bg-image"
              data-background-lg="../../assets/img/illustrations/signin.svg"
            >
              <div className="col-12 d-flex align-items-center justify-content-center">
                <div className="signin-inner my-3 my-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                  <div className="text-center text-md-center mb-4 mt-md-0">
                    <h1 className="mb-0 h3">Sign in to our platform</h1>
                  </div>
                  <form action="#" className="mt-4">
                    <div className="form-group mb-4">
                      <label htmlFor="email">Your Email</label>
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                          <span className="fas fa-envelope"></span>
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="example@company.com"
                          id="email"
                          autoFocus
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-group mb-4">
                        <label htmlFor="password">Your Password</label>
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon2">
                            <span className="fas fa-unlock-alt"></span>
                          </span>
                          <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            id="password"
                            required
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck5"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="defaultCheck5"
                          >
                            Remember me
                          </label>
                        </div>
                        <div>
                          <span className="small text-right">
                            Lost password?
                          </span>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-block btn-primary">
                      Sign in
                    </button>
                  </form>
                  <div className="mt-3 mb-4 text-center">
                    <span className="font-weight-normal">or login with</span>
                  </div>
                  <div className="btn-wrapper my-4 text-center">
                    <button
                      className="btn btn-icon-only btn-pill btn-outline-light text-facebook mr-2"
                      type="button"
                      aria-label="facebook button"
                      title="facebook button"
                    >
                      <span
                        aria-hidden="true"
                        className="fab fa-facebook-f"
                      ></span>
                    </button>
                    <button
                      className="btn btn-icon-only btn-pill btn-outline-light text-twitter mr-2"
                      type="button"
                      aria-label="twitter button"
                      title="twitter button"
                    >
                      <span
                        aria-hidden="true"
                        className="fab fa-twitter"
                      ></span>
                    </button>
                    <button
                      className="btn btn-icon-only btn-pill btn-outline-light text-facebook"
                      type="button"
                      aria-label="github button"
                      title="github button"
                    >
                      <span aria-hidden="true" className="fab fa-github"></span>
                    </button>
                  </div>
                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <span className="font-weight-normal">
                      Not registered?
                      <a href="sign-up.html" className="font-weight-bold">
                        Create account
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
