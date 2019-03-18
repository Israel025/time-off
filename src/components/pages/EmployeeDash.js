import React from 'react';
import { Link } from 'react-router-dom';
import Png from '../../assets/images/logos/logo.png';
import '../../assets/styles/EmployeeDash.css';


class EmployeeDash extends React.Component{
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
                                        <li class="nav-item dash-links">
                                            <Link to="/employee-dash">
                                                <p class="nav-link active btn-sm">Employee Calendar</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item dash-links">
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
                                    <button className="btn btn-danger eDash-logout-btn">Log out</button>
                                </div>
                            </div>                   
                        </nav>                
                    </header>
                </div>
                <div className="eDash-body"></div>
                <div className="eDash-foot"></div>

            </div>
        );
    }
}
export default EmployeeDash;