import React from 'react';
import { Link } from 'react-router-dom';
import Png from '../../assets/images/logos/logo.png';
import '../../assets/styles/EmployeeDash.css';
import Footer from '../common/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


class EmployeeDash extends React.Component{

    onChange = date => this.setState({ date });
    
    handleLogout  = (e) => {
        e.preventDefault();
        Swal({
            title: "Logged-out Successfully",
            icon: "success",
            button: "Okay",
            timer: 2000,
        });
        this.props.history.push('/login');

    }

    render(){
        return(
            <div>
                <div className="eDash-top">
                    <header className="eDash-header">
                        <nav className="navbar">
                            <div className="eDash-top-left">
                                <Link to="/"> 
                                    <img className="eDash-left-png" src={Png} alt="Brand-Logo"/>
                                </Link>
                            </div> 
                            <div className="eDash-top-right"> 
                                <div className="eDash-admin-links">
                                    <ul class="nav nav-pills">
                                        <li class="nav-item eDash-links">
                                            <Link to="/employee-dash">
                                                <p class="nav-link active btn-sm">Employee Calendar</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item eDash-links">
                                            <Link to="/team-view">
                                                <p class="nav-link btn-sm eDash-link-color">Team View</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item eDash-links">
                                            <Link to="/absence-request">
                                                <p class="nav-link btn-sm eDash-link-color">New Absence</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>                                
                                <div class="logout-div">
                                    <Link to="/">
                                        <button className="btn btn-danger eDash-logout-btn"
                                            onClick={this.handleLogout}>Log out</button>
                                    </Link>
                                </div>
                            </div>                   
                        </nav>                
                    </header>
                </div>
                <div className="eDash-body">
                    <div>
                        <div className="eDash-top-text col-md-3">
                            <h2>Welcome User</h2>
                            <p>...your calendar for the year 2019</p>
                        </div>
                    </div>
                    <div>
                        <div className="card-group">
                            <div class="card border-light mb-3">
                                <div class="card-header">Statistics</div>
                                <div class="card-body">
                                    <div>
                                        <h1 className="stat-size">6.5</h1>
                                    </div>
                                    <hr/>
                                    <p class="card-text">Days remaining out of 10 in allowance </p>
                                </div>
                            </div>

                            <div class="card border-light mb-3">
                                <div class="card-header">Used so far</div>
                                <div class="card-body">
                                    <div>
                                        <table class="table table-borderless table-sm">
                                            <tbody class="tbody">
                                                <tr>
                                                    <td class="tr-left">Holiday:</td>
                                                    <td class="tr-right">12.5</td>
                                                </tr>
                                                <tr>
                                                    <td class="tr-left">Sick Leave:</td>
                                                    <td class="tr-right">2 out of 10</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div class="card border-light mb-3">
                                <div class="card-header">Available types</div>
                                <div class="card-body">
                                    <div>
                                        <table class="table table-borderless table-sm">
                                            <tbody class="tbody">
                                                <tr>
                                                    <td class="tr-left">Travel</td>
                                                </tr>
                                                <tr>
                                                    <td class="tr-left">Maternity</td>
                                                </tr>
                                                <tr>
                                                    <td class="tr-left">Leisure Leave</td>
                                                </tr>
                                                <tr>
                                                    <td class="tr-left">Sick Leave (up to 8 days)</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div class="card border-light mb-3">
                                <div class="card-header">Details</div>
                                <div class="card-body">
                                    <div>
                                        <table class="table table-borderless table-sm">
                                            <tbody class="tbody">
                                                <tr>
                                                    <td class="tr-left">Supervisor</td>
                                                    <td class="tr-right">Mayowa Todunu</td>
                                                </tr>
                                                <tr>
                                                    <td class="tr-left">Department</td>
                                                    <td class="tr-right">Full-stack Dev</td>
                                                </tr>
                                                <tr>
                                                    <td class="tr-left">Allowance in 2019:</td>
                                                    <td class="tr-right">15 days</td>
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
                                        before: new Date(2019, 1, 16),
                                    },
                                    {
                                        after: new Date(2019, 2, 11),
                                        before: new Date(2019, 2, 16),
                                    },
                                    {
                                        after: new Date(2019, 3, 11),
                                        before: new Date(2019, 3, 16),
                                    },
                                    {
                                        after: new Date(2019, 4, 11),
                                        before: new Date(2019, 4, 16),
                                    },
                                    {
                                        after: new Date(2019, 6, 11),
                                        before: new Date(2019, 6, 16),
                                    },
                                  ]}
                             />
                        </div>

                    </div> 
                    <div className="">
                        <div class="eDash-table2-div">
                            <div className="dash-txt">
                                <p class="eDash-tbl2-txt">All Absences</p>
                            </div>
                            <table class="table table-hover eDash-table2">
                                <thead>
                                    <tr>
                                        <th scope="col">Type</th>
                                        <th scope="col">Deducted</th>
                                        <th scope="col">Dates</th>
                                        <th scope="col">Apprroved by</th>
                                        <th scope="col"></th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="tr-pad">
                                        <th scope="row">Holiday</th>
                                        <td>5</td>
                                        <td>From 2018-11-19 - 2018-11-24</td>
                                        <td>Admin User</td>
                                        <td><button class="btn btn-light"><FontAwesomeIcon icon="trash-alt"/></button></td>
                                        <td><p className="approved px-0">Approved</p></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Sick Leave</th>
                                        <td>2</td>
                                        <td>From 2018-12-04 - 2018-12-06</td>
                                        <td>Admin User</td>
                                        <td><button class="btn btn-light"><FontAwesomeIcon icon="trash-alt"/></button></td>
                                        <td><p className="approved px-0">Approved</p></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Holiday</th>
                                        <td>5</td>
                                        <td>From 2018-11-19 - 2018-11-24</td>
                                        <td>Admin User</td>
                                        <td><button class="btn btn-light"><FontAwesomeIcon icon="trash-alt"/></button></td>
                                        <td><p className="pending px-0">Pending</p></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Holiday</th>
                                        <td>5</td>
                                        <td>From 2018-11-19 - 2018-11-24</td>
                                        <td>Admin User</td>
                                        <td><button class="btn btn-light"><FontAwesomeIcon icon="trash-alt"/></button></td>
                                        <td><p className="pending px-0">Pending</p></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Holiday</th>
                                        <td>5</td>
                                        <td>From 2018-11-19 - 2018-11-24</td>
                                        <td>Admin User</td>
                                        <td><button class="btn btn-light"><FontAwesomeIcon icon="trash-alt"/></button></td>
                                        <td><p className="rejected px-0">Rejected</p></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Holiday</th>
                                        <td>5</td>
                                        <td>From 2018-11-19 - 2018-11-24</td>
                                        <td>Admin User</td>
                                        <td><button class="btn btn-light"><FontAwesomeIcon icon="trash-alt"/></button></td>
                                        <td><p className="rejected px-0">Rejected</p></td>
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