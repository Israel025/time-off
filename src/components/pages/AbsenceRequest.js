import React from 'react';
import { Link } from 'react-router-dom';
import Png from '../../assets/images/logos/logo.png';
import '../../assets/styles/AbsenceRequest.css';
import Footer from '../common/Footer';
import Side from '../../assets/images/side2.jpg';
import Swal from 'sweetalert';
class AbsenceRequest extends React.Component{

    handleLogout  = (e) => {
        e.preventDefault();
        Swal({
            title: "Loggedout Successfully",
            // text: "You clicked the button!",
            icon: "success",
            button: "Okay",
        });
        this.props.history.push('/login');

    }

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
                                        <button className="btn btn-danger abReq-logout-btn"
                                            onClick={this.handleLogout}>Log out</button>
                                    </Link>
                                </div>
                            </div>                   
                        </nav>                
                    </header>
                </div>
                
                <div className=" row abReq-body">
                    <div className="col-md-4">
                        <img className="index" alt="sideBar" src={Side}/>
                    </div>

                    <div className="col-md-8 abReq-form-div">

                        <div className="">
                            <form>
                                <div className="form-row">
                                    <div className="form-group">
                                        <select className="custom-select" placeholder="Type of Leave" required>
                                            <option value="">Type of Leave</option>
                                            <option value="maternity">Maternity</option>
                                            <option value="health">Health</option>
                                            <option value="travel">Travel</option>
                                            <option value="education">Education</option>
                                            <option value="liesure">Liesure</option>
                                        </select>
                                        <div className="invalid-feedback">Select a country</div>
                                    </div>
                                </div>

                                <div className="form-row">


                                    <div class="form-group col-md-4 mb-3">
                                        <input type="number" class="form-control" id="abReqDur" placeholder="duration" disabled/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div class="form-group">
                                        <textarea class="form-control" id="abReqText" rows="5"></textarea>
                                    </div>                                
                                </div>

                                <div className="form-row">
                                    <button type="submit" 
                                    className="btn btn-primary">Submit Request</button>        
                                </div>
                                
                            </form>

                        </div>
                        

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