import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../../assets/styles/SignUp.css';
import Side from '../../assets/images/side2.jpg';
import SignupBtn from '../common/SignupBtn';
import { Link } from 'react-router-dom';
import FormValidator from '../common/FormValidator';

class SignUp extends React.Component{
    
    constructor(){
        super();

        this.validator = new FormValidator([
            // { 
            //   field: 'loginmail', 
            //   method: 'isEmpty', 
            //   validWhen: false, 
            //   message: 'Email is required.' 
            // },
            // { 
            //   field: 'loginmail',
            //   method: 'isEmail', 
            //   validWhen: true, 
            //   message: 'That is not a valid email.'
            // },
            // { 
            //   field: 'loginpass', 
            //   method: 'isEmpty', 
            //   validWhen: false, 
            //   message: 'Password is required.'
            // },
            { 
                field: 'signupPhone', 
                method: 'isLength', 
                min: 11,
                max: 11,
                validWhen: true, 
                message: 'Phone number must be 11 digits.'
              },
        ]);

        this.state = {
            loginmail: '',
            loginpass: '',
            validation: this.validator.valid(),
        };
      
        this.submitted = false;
    }

    render() {
      return (
        <div className=".mx-auto px-0">

            <div>
                <Header/>
            </div>
            <div className="row index">
                <div className="col-md-4">
                    <Link to="/sign-up">
                        <SignupBtn/>
                    </Link>                    
                    <img className="index" alt="sideBar" src={Side}/>
                </div>
                <div className="col-md-8">
                    <form className="needs-validation signupPos" novalidate>
                        <div className="form-row">

                            <div className="col-md-6 mb-3">
                                <label htmlFor="signupFname">First name</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="signupFname" 
                                    name="signupFname"
                                    placeholder="First name" required
                                />
                                <span className="help-block SignupError"></span>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="signupLname">Last name</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="signupLname" 
                                    name="signupLname"
                                    placeholder="Last name" required
                                />
                                <span className="help-block error"></span>
                            </div>

                        </div>

                        <div className="form-row">

                            <div className="col-md-4 mb-3">
                                <label htmlFor="signupEmail">Email Address</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                    </div>
                                    <input type="email" 
                                        className="form-control" 
                                        id="signupEmail" 
                                        name="signupEmail"
                                        placeholder="user@domain.com" required
                                    />
                                    <span className="help-block error"></span>
                                </div>
                            </div>

                            <div className={`col-md-4 mb-3`}>
                                <label htmlFor="signupPass">Password</label>
                                <input type="password" 
                                    className="form-control" 
                                    id="signupPass" 
                                    name="signupPass" 
                                    onChange={this.handleInputChange}
                                    placeholder="password" required
                                />
                                <span className="help-block error"></span>
                            </div>

                            <div className={`col-md-4 mb-3`}>
                                <label htmlFor="signupPassConfirm">Confirm Password</label>
                                <input type="password" 
                                    className="form-control" 
                                    id="signupPassConfirm" 
                                    name="signupPassConfirm" 
                                    onChange={this.handleInputChange}
                                    placeholder="re-type password" required
                                />
                                <span className="help-block error"></span>
                            </div>
                            
                        </div>

                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="signupCoy">Organisation</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="signupCoy" 
                                    name="signupCoy"
                                    placeholder="company name" required
                                />
                                <span className="help-block error"></span>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="signupPost">Designation</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="signupPost" 
                                    name="signupPost"
                                    placeholder="your post in your company" required
                                />
                                <span className="help-block error"></span>
                            </div>                            
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="signupDept">Department</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="signupDept" 
                                    name="signupDept"
                                    placeholder="your department" required
                                />
                                <span className="help-block error"></span>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="signupManager">Manager</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="signupManager" 
                                    name="signupManager"
                                    placeholder="manager's name" required
                                />
                                <span className="help-block error"></span>
                            </div>                            
                        </div>
                        
                        <div className="form-row">

                            <div className="form-group col-md-3">
                                <label htmlFor="signupPhone">Telephone Number</label>
                                <input type="phone" 
                                    className="form-control" 
                                    id="signupPhone" 
                                    name="signupPhone"
                                    placeholder="Phone Number" required
                                />
                                <span className="help-block error"></span>
                            </div>

                            <div className="form-group col-md-3">                    
                                <label htmlFor="signupDob">Date of Birth</label>
                                <input type="date" 
                                    className="form-control"
                                    name="signupDob" 
                                    id="signupDob" required
                                />
                                <span className="help-block error"></span>
                            </div>

                            <div className="form-group col-md-3">
                                <label htmlFor="signupGender">Gender</label>
                                <select className="custom-select" required>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="confused">Confused</option>
                                </select>
                                <span className="help-block error"></span>
                            </div>

                            <div className="form-group col-md-3">
                                <label htmlFor="signupMarital">Marital Status</label>
                                <select className="custom-select" required>
                                    <option value="">Select Status</option>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                    <option value="not-sure">Not Sure</option>
                                </select>
                                <span className="help-block error"></span>
                            </div>

                        </div>                        

                        <div className="form-row">

                            <div className="form-group col-md-3 mb-3">
                                <label htmlFor="signupCountry">Country</label>
                                <select className="custom-select" required>
                                    <option value="">Select Country</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="USA">USA</option>
                                    <option value="Canada">Canada</option>
                                    <option value="France">France</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Mexico">Mexico</option>
                                </select>
                                <span className="help-block error"></span>
                                <div className="invalid-feedback">Select a country</div>
                            </div>


                            <div className="col-md-5 mb-3">
                                <label for="validationCustom03">City</label>
                                <input type="text" className="form-control" id="validationCustom03" placeholder="City" required/>
                                <div className="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>

                            <div className="col-md-4 mb-3">
                                <label for="validationCustom04">State</label>
                                <input type="text" className="form-control" id="validationCustom04" placeholder="State" required/>
                                <div className="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>
                        
                        </div>

                        <div className="form-group signupBtnPos">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                <label className="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                            </div>
                        </div>
                        <div className="form-row signupBtnPos">
                            <button className="btn btn-primary" type="submit">Submit form</button>           
                        </div>
                        
                    </form>
                </div>            
            </div>
            <div>
                <Footer/>
            </div>
          
        </div>
      );
    }
}
export default SignUp;