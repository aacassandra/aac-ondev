import React, { Component } from "react";
import { ParseSignIn } from "@aacassandra/parse-lib";
import SimpleCrypto from "simple-crypto-js";
import Swal from "sweetalert2";
import { Title } from "../../components/atoms/global";

const secretKey = "eyro-digital-teknologi";
const simpleCrypto = new SimpleCrypto(secretKey);

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      captcha: "",
      backupCaptcha: "",
      rememberMe: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createCaptcha = this.createCaptcha.bind(this);
  }

  createCaptcha(from = "") {
    console.log(from);
    console.log("create cpatcha");
    // clear the contents of captcha div first
    document.getElementById("genCaptcha").innerHTML = "";
    const charsArray =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lengthOtp = 6;
    const captcha = [];
    for (let i = 0; i < lengthOtp; i++) {
      // below code will not allow Repetition of Characters
      const index = Math.floor(Math.random() * charsArray.length + 1); // get the next character from the array
      if (captcha.indexOf(charsArray[index]) === -1)
        captcha.push(charsArray[index]);
      else i--;
    }
    const canv = document.createElement("canvas");
    canv.id = "genCaptcha";
    canv.width = 100;
    canv.height = 36;
    const ctx = canv.getContext("2d");
    ctx.font = "20px Calibri";
    ctx.strokeText(captcha.join(""), 0, 30);
    // storing captcha so that can valipdate you can save it somewhere else according to your specific requirements
    this.setState({
      backupCaptcha: captcha.join(""),
    });

    document.getElementById("genCaptcha").appendChild(canv); // adds the canvas to the body element
  }

  componentDidMount() {
    this.createCaptcha("did mount");
    if (localStorage.client) {
      const client = JSON.parse(localStorage.client);
      if (client.sessionToken !== null) {
        this.props.history.push("/dashboard/overview");
      } else {
        if (client.rememberMe === true) {
          const passwordDecrypted = simpleCrypto.decrypt(client.password);
          this.setState({
            rememberMe: true,
            username: client.username,
            password: passwordDecrypted,
          });
        }
      }
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password, rememberMe } = this.state;

    if (this.state.captcha === "") {
      Swal.fire("Captcha Required", "Please insert the captcha", "warning");
    } else if (this.state.captcha !== this.state.backupCaptcha) {
      this.createCaptcha();
      Swal.fire("Captcha Not Match!", "Please correct your captcha", "error");
    } else {
      ParseSignIn(username, password)
        .then((response) => {
          const passwordEncrypted = simpleCrypto.encrypt(password);
          localStorage.client = JSON.stringify({
            username,
            password: passwordEncrypted,
            captcha: "",
            rememberMe,
            avatar: response.output.avatar ? response.output.avatar.url : "",
            sessionToken: response.output.sessionToken,
          });
          this.props.history.push("/dashboard/overview");
        })
        .catch((error) => {
          if (localStorage.client) {
            localStorage.clear();
          }

          this.setState({
            rememberMe: false,
            username: "",
            password: "",
            captcha: "",
          });

          this.createCaptcha();
          Swal.fire(
            "Signin Failed",
            "Your username or password is invalid",
            "error"
          );
        });
    }
  }

  render() {
    return (
      <main>
        <Title name="Signin" />
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
                  <form onSubmit={this.handleSubmit} className="mt-4">
                    <div className="form-group mb-4">
                      <label htmlFor="username">Your Username</label>
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                          <span className="fas fa-envelope"></span>
                        </span>
                        <input
                          type="username"
                          className="form-control"
                          placeholder="Username"
                          id="username"
                          name="username"
                          autoFocus
                          value={this.state.username}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div>
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
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-9">
                          <div className="form-group mb-4">
                            <label htmlFor="captcha">Captcha</label>
                            <div className="input-group">
                              <span
                                className="input-group-text"
                                id="basic-addon3"
                              >
                                <span className="fas fa-robot"></span>
                              </span>
                              <input
                                type="text"
                                placeholder="Captcha"
                                className="form-control"
                                id="captcha"
                                name="captcha"
                                value={this.state.captcha}
                                onChange={this.handleChange}
                                // required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-3 mt-auto mb-auto">
                          <div id="genCaptcha"></div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            checked={this.state.rememberMe}
                            onChange={this.handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
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

                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <span className="font-weight-normal">
                      Not registered?{" "}
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
