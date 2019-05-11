import React from "react";
import { Link } from "react-router-dom";
import Png from "../../assets/images/logos/logo.png";
import "../../assets/styles/TeamView.css";
import Footer from "../common/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert";

class TeamView extends React.Component {
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
        <div className="tView-top">
          <header className="tView-header">
            <nav className="navbar">
              <div className="tView-top-left">
                <Link to="/">
                  <img className="tView-left-png" src={Png} alt="Brand-Logo" />
                </Link>
              </div>
              <div className="tView-top-right">
                <div className="tView-admin-links">
                  <ul class="nav nav-pills">
                    <li class="nav-item tView-links">
                      <Link to="/employee-dash">
                        <p class="nav-link btn-sm tView-link-color">
                          Employee Calendar
                        </p>
                      </Link>
                    </li>
                    <li class="nav-item tView-links">
                      <Link to="/team-view">
                        <p class="nav-link active btn-sm">Team View</p>
                      </Link>
                    </li>
                    <li class="nav-item tView-links">
                      <Link to="/absence-request">
                        <p class="nav-link btn-sm tView-link-color">
                          New Absence
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="logout-div">
                  <Link to="/">
                    <button
                      className="btn btn-danger tView-logout-btn"
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
            <div className="tView-top-text col-md-3">
              <h3>Jane Doe Messages</h3>
            </div>
          </div>

          <div className="">
            <div class="tView-table1-div">
              <div className="tView-txt">
                <p class="tView-tbl2-txt">Leave Requests to Approve</p>
              </div>
              <table class="table table-hover eDash-table2">
                <thead>
                  <tr>
                    <th scope="col">Employee</th>
                    <th scope="col">Department</th>
                    <th scope="col">Date of Request</th>
                    <th scope="col">Leave Dates</th>
                    <th scope="col">Type</th>
                    <th scope="col">Days</th>
                    <th scope="col" />
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Michael Card</th>
                    <td>Store</td>
                    <td>2018-12-20</td>
                    <td>From 2019-03-20 - 2019-04-01</td>
                    <td>Leisure Leave</td>
                    <td>12</td>
                    <td>
                      <button type="button" class="btn btn-danger btn-sm">
                        Reject
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-success btn-sm">
                        Approve
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Michael Card</th>
                    <td>Store</td>
                    <td>2018-12-20</td>
                    <td>From 2019-03-20 - 2019-04-01</td>
                    <td>Leisure Leave</td>
                    <td>12</td>
                    <td>
                      <button type="button" class="btn btn-danger btn-sm">
                        Reject
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-success btn-sm">
                        Approve
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">Michael Card</th>
                    <td>Store</td>
                    <td>2018-12-20</td>
                    <td>From 2019-03-20 - 2019-04-01</td>
                    <td>Leisure Leave</td>
                    <td>12</td>
                    <td>
                      <button type="button" class="btn btn-danger btn-sm">
                        Reject
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-success btn-sm">
                        Approve
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Michael Card</th>
                    <td>Store</td>
                    <td>2018-12-20</td>
                    <td>From 2019-03-20 - 2019-04-01</td>
                    <td>Leisure Leave</td>
                    <td>12</td>
                    <td>
                      <button type="button" class="btn btn-danger btn-sm">
                        Reject
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-success btn-sm">
                        Approve
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Michael Card</th>
                    <td>Store</td>
                    <td>2018-12-20</td>
                    <td>From 2019-03-20 - 2019-04-01</td>
                    <td>Leisure Leave</td>
                    <td>12</td>
                    <td>
                      <button type="button" class="btn btn-danger btn-sm">
                        Reject
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-success btn-sm">
                        Approve
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Michael Card</th>
                    <td>Store</td>
                    <td>2018-12-20</td>
                    <td>From 2019-03-20 - 2019-04-01</td>
                    <td>Leisure Leave</td>
                    <td>12</td>
                    <td>
                      <button type="button" class="btn btn-danger btn-sm">
                        Reject
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-success btn-sm">
                        Approve
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="">
            <div class="tView-table1-div">
              <div className="tView-txt">
                <p class="tView-tbl2-txt">All Leaves</p>
              </div>
              <table class="table table-hover eDash-table2">
                <thead>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Deducted</th>
                    <th scope="col">Dates</th>
                    <th scope="col">Approved by</th>
                    <th scope="col" />
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Holiday</th>
                    <td>7</td>
                    <td>From 2019-03-20 - 2019-04-01</td>
                    <td>Admin user</td>
                    <td>
                      <button class="btn btn-light">
                        <FontAwesomeIcon icon="trash-alt" />
                      </button>
                    </td>
                    <td>
                      <p className="approved">Approved</p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Sick Leave</th>
                    <td>7</td>
                    <td>From 2019-03-20 - 2019-04-01</td>
                    <td>Admin user</td>
                    <td>
                      <button class="btn btn-light">
                        <FontAwesomeIcon icon="trash-alt" />
                      </button>
                    </td>
                    <td>
                      <p className="approved">Approved</p>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">Holiday</th>
                    <td>7</td>
                    <td>From 2019-03-20 - 2019-04-01</td>
                    <td>Admin user</td>
                    <td>
                      <button class="btn btn-light">
                        <FontAwesomeIcon icon="trash-alt" />
                      </button>
                    </td>
                    <td>
                      <p className="pending">Pending</p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Holiday</th>
                    <td>7</td>
                    <td>From 2019-03-20 - 2019-04-01</td>
                    <td>Admin user</td>
                    <td>
                      <button class="btn btn-light">
                        <FontAwesomeIcon icon="trash-alt" />
                      </button>
                    </td>
                    <td>
                      <p className="pending">Pending</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="tView-foot">
          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
export default TeamView;
