import React from "react";
import env from "../../env";
import { Link } from "react-router-dom";
import Png from "../../assets/images/logos/logo.png";
import "../../assets/styles/AbsenceRequest.css";
import Footer from "../common/Footer";
import Side from "../../assets/images/side2.jpg";
import Swal from "sweetalert";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import axios from "axios";
import FormValidator from "../common/FormValidator";

class AbsenceRequest extends React.Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator([
      {
        field: "abReqLeave",
        method: "isEmpty",
        validWhen: false,
        message: "Select Leave type."
      },
      {
        field: "abReqText",
        method: "isEmpty",
        validWhen: false,
        message: "Reason for Leave is required."
      },
      {
        field: "abReqText",
        method: "matches",
        args: [
          /([a-zA-Z\d]{1}[a-zA-Z\d]*[\s]{0,1}[a-zA-Z\d])+([\s]{0,1}[a-zA-Z\d]+)/
        ],
        validWhen: true,
        message: "Invalid entry."
      },
      {
        field: "dateEnd",
        method: "isEmpty",
        validWhen: false,
        message: "Reason for Leave is required."
      }
    ]);

    this.state = {
      abReqLeave: "",
      abReqText: "",
      dateStart: new Date(),
      dateEnd: "",
      validation: this.validator.valid(),
      today: new Date(),
      backDate: new Date(),
      forwardDate: new Date (),
      loading: true
    };
    this.submitted = false;
  }

 async componentDidMount() {
   try {
    const token = localStorage.getItem("timeoff-token");
    if (!token) {
      Swal({
        title: "Invalid access mode, Login or Signup",
        className: "red-bg",
        icon: "error",
        dangerMode: true,
        button: "Okay"
      });
      return this.props.history.push("/login");
    }
    this.setState({
      loading: false
    });
     
   } catch (err) {
     
    if(localStorage.getItem("timeoff-token")) {
       localStorage.removeItem("timeoff-token");
      }
     this.props.history.push("/login");     
   }
    
  }
  handleDateStart = event => {
    this.setState({ dateStart: event.valueOf() });
    this.setState({ backDate: new Date(event.valueOf()) });
    this.setState({ forwardDate: "" });
  };

  handleDateEnd = event => {
    this.setState({ dateEnd: event.valueOf() });
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem("timeoff-token");
    Swal({
      title: "Logged-out Successfully",
      icon: "success",
      button: "Okay",
      timer: 2000
    });
    this.props.history.push("/login");
  };

  handleFormSubmit = async event => {
    event.preventDefault();

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    if (validation.isValid) {
      const leaveData = {
        leave_type: this.state.abReqLeave,
        date_start: this.state.dateStart,
        date_end: this.state.dateEnd,
        leave_reason: this.state.abReqText
      };
      const token = localStorage.getItem("timeoff-token");

      try {
        const res = await axios.post(`${env.api}/leave/`, leaveData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        console.log(res);

        Swal({
          title: "Request Sent",
          icon: "success",
          timer: 900
        });

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (err) {
        console.log("an error occured", err);
      }
    } else {
      Swal({
        title: "Fill all fields correctly ",
        className: "red-bg",
        icon: "error",
        dangerMode: true,
        button: "Okay"
      });
    }
  };

  render() {

    if (this.state.loading) {
      return (
        <div
          className="d-flex justify-content-center"
          style={{ margin: "15em auto auto auto" }}
        >
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-dark" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <button
            className="btn btn-success btn-lg"
            style={{ fontWeight: "bold" }}
            type="button"
            disabled
          >
            Loading...
          </button>
        </div>
      );
    }

    
    let begin = this.state.dateStart;
    let end = this.state.dateEnd;
    let total = Math.round((end - begin) * (1.1574 * 0.00000001));

    let duration = total <= 0 ? "" : `${total} day(s)`;

    let validateRequest = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;

    return (
      <div>
        <div className="abReq-top">
          <header className="abReq-header">
            <nav className="navbar">
              <div className="abReq-top-left">
                <Link to="/">
                  <img className="abReq-left-png" src={Png} alt="Brand-Logo" />
                </Link>
              </div>
              <div className="abReq-top-right">
                <div className="abReq-admin-links">
                  <ul className="nav nav-pills">
                    <li className="nav-item abReq-links">
                      <Link to="/employee-dash">
                        <p className="nav-link btn-sm abReq-link-color">
                          Employee Calendar
                        </p>
                      </Link>
                    </li>
                    <li className="nav-item abReq-links">
                      <Link to="/team-view">
                        <p className="nav-link btn-sm abReq-link-color">
                          Team View
                        </p>
                      </Link>
                    </li>
                    <li className="nav-item abReq-links">
                      <Link to="/absence-request">
                        <p className="nav-link active btn-sm">New Absence</p>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="abReq-logout-div">
                  <Link to="/">
                    <button
                      className="btn btn-danger abReq-logout-btn"
                      onClick={this.handleLogout}
                    >
                      Log out
                    </button>
                  </Link>
                </div>
              </div>
            </nav>
          </header>
        </div>

        <div className=" row abReq-body">
          <div className="col-md-4">
            <img className="index" alt="sideBar" src={Side} />
          </div>

          <div className="col-md-8 abReq-form-div">
            <div className="abReq-formPos">
              <form className="needs-validation abReq-form" noValidate>
                <div className="form-row">
                  <div
                    className={`form-group col-md-12 ${validateRequest
                      .abReqLeave.isInValid && "has-error"}`}
                  >
                    <select
                      className="custom-select"
                      name="abReqLeave"
                      onChange={this.handleInputChange}
                      id="abReqLeave"
                      required
                    >
                      <option value="">--Type of Leave--</option>
                      <option value="maternity">Maternity</option>
                      <option value="health">Health</option>
                      <option value="travel">Travel</option>
                      <option value="education">Education</option>
                      <option value="liesure">Liesure</option>
                    </select>
                    <span className="help-block abReqError">
                      {validateRequest.abReqLeave.message}
                    </span>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-4 mb-3">
                    <label htmlFor="abReqFrom">From</label>
                    <DayPickerInput
                      dayPickerProps={{
                        disabledDays: { before: this.state.today }
                      }}
                      className="form-control"
                      name="abReqFrom"
                      value={new Date().toLocaleDateString()}
                      onDayChange={this.handleDateStart}
                      id="abReqFrom"
                      required
                    />
                  </div>

                  <div className="form-group col-md-4 mb-3">
                    <label htmlFor="abReq-from">To</label>
                    <DayPickerInput
                      dayPickerProps={{
                        disabledDays: {
                          before: this.state.backDate,
                          after: this.state.forwardDate
                        }
                      }}
                      className="form-control"
                      name="abReq-to"
                      onDayChange={this.handleDateEnd}
                      id="abReq-to"
                      required
                    />
                  </div>

                  <div className="form-group col-md-4 mb-3">
                    <label htmlFor="abReq-dur">Duration</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="None"
                      value={duration}
                      // onChange={this.setDuration}
                      id="abReq-dur"
                      disabled
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div
                    className={`form-group col-md-12 ${validateRequest.abReqText
                      .isInValid && "has-error"}`}
                  >
                    <textarea
                      className="form-control"
                      id="abReqText"
                      name="abReqText"
                      placeholder="Reason for Leave"
                      onChange={this.handleInputChange}
                      rows="6"
                      required
                    />
                    {/* </textarea> */}
                    <span className="help-block abReqError">
                      {validateRequest.abReqText.message}
                    </span>
                  </div>
                </div>

                <div className="form-row abReq-submit">
                  <button
                    type="submit"
                    onClick={this.handleFormSubmit}
                    className="btn btn-primary"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="abReq-foot">
          <Footer />
        </div>
      </div>
    );
  }
}
export default AbsenceRequest;
