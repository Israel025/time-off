import React from 'react';
import { Link } from 'react-router-dom';
import Png from '../../assets/images/logos/logo.png';
import '../../assets/styles/AbsenceRequest.css';
import Footer from '../common/Footer';
import Side from '../../assets/images/side2.jpg';

class AbsenceRequest extends React.Component{
    render(){
        return(
            <div>
                <div className="abReq-top">
                    <header className="abReq-header">
                        <nav className="navbar">
                            <div className="abReq-top-left">
                                <Link to="/"> 
                                    <img className="abReq-left-png" src={Png} alt="Brand-Logo"/>
                                </Link>
                            </div> 
                            <div className="abReq-top-right"> 
                                <div className="abReq-admin-links">
                                    <ul class="nav nav-pills">
                                        <li class="nav-item abReq-links">
                                            <Link to="/employee-dash">
                                                <p class="nav-link btn-sm abReq-link-color">Employee Calendar</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item abReq-links">
                                            <Link to="/team-view">
                                                <p class="nav-link btn-sm abReq-link-color">Team View</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item abReq-links">
                                            <Link to="/absence-request">
                                                <p class="nav-link active btn-sm">New Absence</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>                                
                                <div class="abReq-logout-div">
                                    <Link to="/">
                                        <button className="btn btn-danger abReq-logout-btn">Log out</button>
                                    </Link>
                                </div>
                            </div>                   
                        </nav>                
                    </header>
                </div>
                
                <div className="abReq-body">
                    <div className="col-md-4">
                        <img className="index" alt="sideBar" src={Side}/>
                    </div>

                    <div className="abReq-form-div">
                        

                    </div>
                </div>
                <div className="abReq-foot">
                    <Footer/>
                </div>

            </div>
        );
    }
}
export default AbsenceRequest;