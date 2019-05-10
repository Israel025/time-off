import React from "react";
import env from "../../env";
import { Link } from "react-router-dom";
import Png from "../../assets/images/logos/logo.png";
import "../../assets/styles/EmployeeDash.css";
import axios from "axios";
import Footer from "../common/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
class EmployeeDash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: null
    };
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

      const res = await axios.get(`${env.api}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      this.setState({
        loading: false,
        user: res.data.data
      });
    } catch (err) {
      if (localStorage.getItem("timeoff-token")) {
        localStorage.removeItem("timeoff-token");
      }
      // console.log(err.response);
      this.props.history.push("/login");
    }
  }

  onChange = date => this.setState({ date });

  handleLogout = e => {
    localStorage.removeItem("timeoff-token");
    e.preventDefault();
    Swal({
      title: "Logged-out Successfully",
      icon: "success",
      button: "Okay",
      timer: 2000
    });

    this.props.history.push("/login");
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

    return (
      <div>
        <div className="eDash-top">
          <header className="eDash-header">
            <nav className="navbar">
              <div className="eDash-top-left">
                <Link to="/">
                  <img className="eDash-left-png" src={Png} alt="Brand-Logo" />
                </Link>
              </div>
              <div className="eDash-top-right">
                <div className="eDash-admin-links">
                  <ul className="nav nav-pills">
                    <li className="nav-item eDash-links">
                      <Link to="/employee-dash">
                        <p className="nav-link active btn-sm">
                          Employee Calendar
                        </p>
                      </Link>
                    </li>
                    <li className="nav-item eDash-links">
                      <Link to="/team-view">
                        <p className="nav-link btn-sm eDash-link-color">
                          Team View
                        </p>
                      </Link>
                    </li>
                    <li className="nav-item eDash-links">
                      <Link to="/absence-request">
                        <p className="nav-link btn-sm eDash-link-color">
                          New Absence
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="logout-div">
                  <Link to="/">
                    <button
                      className="btn btn-danger eDash-logout-btn"
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
        <div className="eDash-body">
          <div>
            <div className="eDash-top-text col-md-3">
              <h2>
                Welcome: {this.state.user.first_name}{" "}
                {this.state.user.last_name}
              </h2>
              <p>...your calendar for the year {new Date().getFullYear()}</p>
            </div>
          </div>
          <div>
            <div className="card-group">
              <div className="card border-light mb-3">
                <div className="card-header">Statistics</div>
                <div className="card-body">
                  <div>
                    <h1 className="stat-size">6.5</h1>
                  </div>
                  <hr />
                  <p className="card-text">
                    Days remaining out of 10 in allowance{" "}
                  </p>
                </div>
              </div>

              <div className="card border-light mb-3">
                <div className="card-header">Used so far</div>
                <div className="card-body">
                  <div>
                    <table className="table table-borderless table-sm">
                      <tbody className="tbody">
                        <tr>
                          <td className="tr-left">Holiday:</td>
                          <td className="tr-right">12.5</td>
                        </tr>
                        <tr>
                          <td className="tr-left">Sick Leave:</td>
                          <td className="tr-right">2 out of 10</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="card border-light mb-3">
                <div className="card-header">Available types</div>
                <div className="card-body">
                  <div>
                    <table className="table table-borderless table-sm">
                      <tbody className="tbody">
                        <tr>
                          <td className="tr-left">Travel</td>
                        </tr>
                        <tr>
                          <td className="tr-left">Maternity</td>
                        </tr>
                        <tr>
                          <td className="tr-left">Leisure Leave</td>
                        </tr>
                        <tr>
                          <td className="tr-left">
                            Health Leave (up to 8 days)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="card border-light mb-3">
                <div className="card-header">Details</div>
                <div className="card-body">
                  <div>
                    <table className="table table-borderless table-sm">
                      <tbody className="tbody">
                        <tr>
                          <td className="tr-left">Supervisor</td>
                          <td className="tr-right">
                            {this.state.user.manager_name}
                          </td>
                        </tr>
                        <tr>
                          <td className="tr-left">Department</td>
                          <td className="tr-right">
                            {this.state.user.department}
                          </td>
                        </tr>
                        <tr>
                          <td className="tr-left">Allowance in 2019:</td>
                          <td className="tr-right">15 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row eDash-calDiv">
            <div className="eDashCal">
              <DayPicker
                className="dayPik"
                numberOfMonths={5}
                selectedDays={[
                  {
                    after: new Date(2019, 1, 11),
                    before: new Date(2019, 1, 16)
                  },
                  {
                    after: new Date(2019, 2, 11),
                    before: new Date(2019, 2, 16)
                  },
                  {
                    after: new Date(2019, 3, 11),
                    before: new Date(2019, 3, 16)
                  },
                  {
                    after: new Date(2019, 4, 11),
                    before: new Date(2019, 4, 16)
                  },
                  {
                    after: new Date(2019, 6, 11),
                    before: new Date(2019, 6, 16)
                  }
                ]}
              />
            </div>
          </div>
          <div className="">
            <div className="eDash-table2-div">
              <div className="dash-txt">
                <p className="eDash-tbl2-txt">All Absences</p>
              </div>
              <table className="table table-hover eDash-table2">
                <thead>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Deducted</th>
                    <th scope="col">Dates</th>
                    <th scope="col">Checked by</th>
                    <th scope="col" />
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tr-pad">
                    <th scope="row">Holiday</th>
                    <td>5</td>
                    <td>From 2018-11-19 - 2018-11-24</td>
                    <td>Admin User</td>
                    <td>
                      <button className="btn btn-light">
                        <FontAwesomeIcon icon="trash-alt" />
                      </button>
                    </td>
                    <td>
                      <p className="approved px-0">Approved</p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Sick Leave</th>
                    <td>2</td>
                    <td>From 2018-12-04 - 2018-12-06</td>
                    <td>Admin User</td>
                    <td>
                      <button className="btn btn-light">
                        <FontAwesomeIcon icon="trash-alt" />
                      </button>
                    </td>
                    <td>
                      <p className="approved px-0">Approved</p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Holiday</th>
                    <td>5</td>
                    <td>From 2018-11-19 - 2018-11-24</td>
                    <td>Admin User</td>
                    <td>
                      <button className="btn btn-light">
                        <FontAwesomeIcon icon="trash-alt" />
                      </button>
                    </td>
                    <td>
                      <p className="pending px-0">Pending</p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Holiday</th>
                    <td>5</td>
                    <td>From 2018-11-19 - 2018-11-24</td>
                    <td>Admin User</td>
                    <td>
                      <button className="btn btn-light">
                        <FontAwesomeIcon icon="trash-alt" />
                      </button>
                    </td>
                    <td>
                      <p className="pending px-0">Pending</p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Holiday</th>
                    <td>5</td>
                    <td>From 2018-11-19 - 2018-11-24</td>
                    <td>Admin User</td>
                    <td>
                      <button className="btn btn-light">
                        <FontAwesomeIcon icon="trash-alt" />
                      </button>
                    </td>
                    <td>
                      <p className="rejected px-0">Rejected</p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Holiday</th>
                    <td>5</td>
                    <td>From 2018-11-19 - 2018-11-24</td>
                    <td>Admin User</td>
                    <td>
                      <button className="btn btn-light">
                        <FontAwesomeIcon icon="trash-alt" />
                      </button>
                    </td>
                    <td>
                      <p className="rejected px-0">Rejected</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="eDash-foot">
          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
export default EmployeeDash;
