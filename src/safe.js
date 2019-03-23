import React from 'react';
import { Link } from 'react-router-dom';
import Png from '../../assets/images/logos/logo.png';
import '../../assets/styles/AbsenceRequest.css';
import Footer from '../common/Footer';
import Side from '../../assets/images/side2.jpg';
import Swal from 'sweetalert';
class AbsenceRequest extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
          dateStart: "",
          dateEnd: "",
        };
    
        // this.handleChangestart = this.handleChangestart.bind(this);
        // this.handleChangeend = this.handleChangeend.bind(this);
    
        // this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleDateStart = (event) => { 
        this.setState({dateStart: event.target.value});
    }
    
    handleDateEnd = (event) => {
        this.setState({dateEnd: event.target.value});
    }

    handleLogout  = (e) => {
        e.preventDefault();
        Swal({
            title: "Loggedout Successfully",
            icon: "success",
            button: "Okay",
        });
        this.props.history.push('/login');
    }

    render(){

        let begin = Date.parse(this.state.dateStart);
        let end = Date.parse(this.state.dateEnd);

        let duration = (Math.round((end - begin) * (1.1574 * 0.00000001))).toString();
        console.log(typeof duration);
        
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

                        <div className="abReq-formPos">
                            <form className="needs-validation abReq-form" noValidate>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
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
                                        <label htmlFor="abReq-from">From</label>
                                        <input type="date" 
                                            className="form-control"
                                            name="abReq-from" 
                                            onChange={this.handleDateStart}
                                            id="abReq-from" required
                                        />
                                    </div>
                                    <div class="form-group col-md-4 mb-3">
                                        <label htmlFor="abReq-to">To</label>
                                        <input type="date" 
                                            className="form-control"
                                            name="abReq-to" 
                                            onChange={this.handleDateEnd}
                                            id="abReq-to" required
                                        />
                                    </div>


                                    <div class="form-group col-md-4 mb-3">
                                        <label htmlFor="abReq-dur">Duration</label>
                                        <input type="text" 
                                            class="form-control"
                                            value={isNaN(duration)? "None" : `${duration} day(s)`}
                                            id="abReq-dur" disabled/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div class="form-group col-md-12">
                                        <textarea class="form-control" id="abReqText" rows="5"></textarea>
                                    </div>                                
                                </div>

                                <div className="form-row abReq-submit">
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