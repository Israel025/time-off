import React from "react";
import env from "../../env";
import "../../assets/styles/Login.css";
import Header from "../common/Header";
import axios from "axios";
import Footer from "../common/Footer";
import Side from "../../assets/images/side2.jpg";
import SignupBtn from "../common/SignupBtn";
import FormValidator from "../common/FormValidator";
import { Link } from "react-router-dom";
import Swal from "sweetalert";

class Login extends React.Component {
  constructor() {
    super();

    this.validator = new FormValidator([
      {
        field: "loginmail",
        method: "isEmpty",
        validWhen: false,
        message: "Email is required."
      },
      {
        field: "loginmail",
        method: "isEmail",
        validWhen: true,
        message: "That is not a valid email."
      },
      {
        field: "loginpass",
        method: "isEmpty",
        validWhen: false,
        message: "Password is required."
      }
    ]);

    this.state = {
      loginmail: "",
      loginpass: "",
      validation: this.validator.valid()
    };

    this.submitted = false;
  }

  passwordMatch = (confirmation, state) => state.password === confirmation;

  handleInputChange = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidMount() {
    const token = localStorage.getItem("timeoff-token");
    if (token) {
      return this.props.history.push("/employee-dash");
    }
  }

  handleFormSubmit = async event => {
    event.preventDefault();

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    if (validation.isValid) {
      const loginData = {
        email: this.state.loginmail,
        password: this.state.loginpass
      };

      try {
        const res = await axios.post(`${env.api}/user/login`, loginData);

        const token = res.data.data.token;

        localStorage.setItem("timeoff-token", token);

        Swal({
          title: "Welcome!",
          icon: "success",
          button: "Continue",
          timer: 2000
        });

        this.props.history.push("/employee-dash");
      } catch (err) {
        Swal({
          title: "Invalid Login Details",
          className: "red-bg",
          icon: "error",
          dangerMode: true,
          button: "Okay"
        });
        console.log("An error occured", err.response);
        this.props.history.push("/login");
      }
    }
  };

  render() {
    let validateLogin = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;
    return (
      <div className=".mx-auto px-0">
        <div>
          <Header />
        </div>
        <div className="row index">
          <div className="col-md-4">
            <Link to="/sign-up">
              <SignupBtn />
            </Link>
            <img className="index" alt="sideBar" src={Side} />
          </div>
          <div className="col-md-8">
            <form className="needs-validation position" noValidate>
              <div
                className={`mb-4 ${validateLogin.loginmail.isInValid &&
                  "has-error"}`}
              >
                <label htmlFor="loginMail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="loginMail"
                  name="loginmail"
                  onChange={this.handleInputChange}
                  placeholder="user@domain.com"
                  required
                />
                <span className="help-block error">
                  {validateLogin.loginmail.message}
                </span>
              </div>

              <div
                className={`mb-4 ${validateLogin.loginpass.isInValid &&
                  "has-error"}`}
              >
                <label htmlFor="loginPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="loginPassword"
                  name="loginpass"
                  onChange={this.handleInputChange}
                  placeholder="password"
                  required
                />
                <span className="help-block error">
                  {validateLogin.loginpass.message}
                </span>
              </div>

              <div className="mb-4">
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="autoSizingCheck"
                  />
                  <label className="form-check-label" htmlFor="autoSizingCheck">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="mb-4 ">
                <div className="col-sm-10 btnpos">
                  <button
                    type="submit"
                    onClick={this.handleFormSubmit}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Login;
