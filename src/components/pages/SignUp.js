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
            { 
                field: 'signupFname', 
                method: 'isEmpty', 
                validWhen: false, 
                message: 'Firstname is Required.' 
            },
            { 
                field: 'signupFname', 
                method: 'isAlpha', 
                validWhen: true, 
                message: 'Enter alphabets only.' 
            },
            { 
                field: 'signupLname', 
                method: 'isEmpty', 
                validWhen: false, 
                message: 'Lastname is required.' 
            },
            { 
                field: 'signupLname',
                method: 'isAlpha', 
                validWhen: true, 
                message: 'Enter alphabets only.'
            },
            { 
              field: 'signupEmail', 
              method: 'isEmpty', 
              validWhen: false, 
              message: 'Email is required.' 
            },
            { 
              field: 'signupEmail',
              method: 'isEmail', 
              validWhen: true, 
              message: 'That is not a valid email.'
            },
            { 
                field: 'signupPass', 
                method: 'isEmpty', 
                validWhen: false, 
                message: 'Password is required.'
            },
            { 
                field: 'signupPassConfirm', 
                method: 'isEmpty', 
                validWhen: false, 
                message: 'Retype Password.'
            },
            { 
                field: 'signupPassConfirm', 
                method: this.passwordMatch,   // notice that we are passing a custom function here
                validWhen: true, 
                message: 'Password do not match.'
            },
            { 
                field: 'signupCoy', 
                method: 'isEmpty', 
                validWhen: false, 
                message: 'Company name is Required.' 
            },
            { 
                field: 'signupCoy', 
                method: 'isAlphanumeric', 
                validWhen: true, 
                message: 'Invalid entry.' 
            },
            { 
                field: 'signupPost', 
                method: 'isEmpty', 
                validWhen: false, 
                message: 'Post is Required.' 
            },
            { 
                field: 'signupPost', 
                method: 'isAlpha', 
                validWhen: true, 
                message: 'Alphabets only.' 
            },
            { 
                field: 'signupDept', 
                method: 'isEmpty', 
                validWhen: false, 
                message: 'Company name is Required.' 
            },
            { 
                field: 'signupDept', 
                method: 'isAlpha', 
                validWhen: true, 
                message: 'Alphabets only.' 
            },
            { 
                field: 'signupManager', 
                method: 'isEmpty', 
                validWhen: false, 
                message: 'Manager name is Required.' 
            },
            { 
                field: 'signupManager', 
                method: 'isAlpha', 
                validWhen: true, 
                message: 'Alphabets only.' 
            },
            { 
              field: 'signupPhone', 
              method: 'isEmpty', 
              validWhen: false, 
              message: 'Phone number is Required.'
            },
            {
              field: 'signupPhone', 
              method: 'matches',
              args: [/^\(?\d\d\d\)? ?\d\d\d\d-?\d\d\d\d$/], // args is an optional array of arguements that will be passed to the validation method
              validWhen: true, 
              message: 'That is not a valid phone number.'
            },
            { 
                field: 'signupDob', 
                method: 'isEmpty', 
                validWhen: false, 
                message: 'Date of birth is Required.' 
            },
            { 
                field: 'signupCity', 
                method: 'isEmpty', 
                validWhen: false, 
                message: 'Company name is Required.' 
            },
            { 
                field: 'signupCity', 
                method: 'isAlpha', 
                validWhen: true, 
                message: 'Alphabets only.' 
            },
            { 
                field: 'signupState', 
                method: 'isEmpty', 
                validWhen: false, 
                message: 'Company name is Required.' 
            },
            { 
                field: 'signupState', 
                method: 'isAlpha', 
                validWhen: true, 
                message: 'Alphabets only.' 
            },
            
          ]);
      
          this.state = {
              signupFname: '',
              signupLname: '',
              signupEmail: '',
              signupPass: '',
              signupPassConfirm: '',
              signupCoy: '',
              signupPost: '',
              signupDept: '',
              signupManager: '',
              signupPhone: '',
              signupDob: '',
              signupCity: '',
              signupState: '',
              validation: this.validator.valid(),
          }
      
          this.submitted = false;
        }
      
        passwordMatch = (confirmation, state) => (state.password === confirmation)
      
        handleInputChange = event => {
          event.preventDefault();
      
          this.setState({
            [event.target.name]: event.target.value,
      });

        
    }

    render() {
        let validateSignup = this.submitted ? this.validator.validate(this.state) : this.state.validation;
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
                    <form className="signupPos">
                        <div className="form-row">

                            <div className={`col-md-6 mb-3 ${validateSignup.signupFname.isInValid && 'has-error'}`}>
                                <label htmlFor="signupFname">First name</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="signupFname" 
                                    name="signupFname"
                                    onChange={this.handleInputChange}
                                    placeholder="First name" required
                                />
                                <span className="help-block error">{validateSignup.signupFname.message}</span>
                            </div>

                            <div className={`col-md-6 mb-3 ${validateSignup.signupLname.isInValid && 'has-error'}`}>
                                <label htmlFor="signupLname">Last name</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="signupLname" 
                                    name="signupLname"
                                    onChange={this.handleInputChange}
                                    placeholder="Last name" required
                                />
                                <span className="help-block error">{validateSignup.signupLname.message}</span>
                            </div>

                        </div>

                        <div className="form-row">

                            <div className={`col-md-4 mb-3 ${validateSignup.signupEmail.isInValid && 'has-error'}`}>
                                <label htmlFor="signupEmail">Email Address</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                    </div>
                                    <input type="email" 
                                        className="form-control" 
                                        id="signupEmail" 
                                        name="signupEmail"
                                        onChange={this.handleInputChange}
                                        placeholder="user@domain.com" required
                                    />
                                    <span className="help-block error">{validateSignup.signupEmail.message}</span>
                                </div>
                            </div>

                            <div className={`col-md-4 mb-3 ${validateSignup.signupPass.isInValid && 'has-error'}`}>
                                <label htmlFor="signupPass">Password</label>
                                <input type="password" 
                                    className="form-control" 
                                    id="signupPass" 
                                    name="signupPass" 
                                    onChange={this.handleInputChange}
                                    placeholder="password" required
                                />
                                <span className="help-block error">{validateSignup.signupPass.message}</span>
                            </div>

                            <div className={`col-md-4 mb-3 ${validateSignup.signupPassConfirm.isInValid && 'has-error'}`}>
                                <label htmlFor="signupPassConfirm">Confirm Password</label>
                                <input type="password" 
                                    className="form-control" 
                                    id="signupPassConfirm" 
                                    name="signupPassConfirm" 
                                    onChange={this.handleInputChange}
                                    placeholder="re-type password" required
                                />
                                <span className="help-block error">{validateSignup.signupPassConfirm.message}</span>
                            </div>
                            
                        </div>

                        <div className="form-row">
                            <div className={`col-md-6 mb-3 ${validateSignup.signupCoy.isInValid && 'has-error'}`}>
                                <label htmlFor="signupCoy">Organisation</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="signupCoy" 
                                    name="signupCoy"
                                    onChange={this.handleInputChange}
                                    placeholder="company name" required
                                />
                                <span className="help-block error">{validateSignup.signupCoy.message}</span>
                            </div>

                            <div className={`col-md-6 mb-3 ${validateSignup.signupPost.isInValid && 'has-error'}`}>
                                <label htmlFor="signupPost">Designation</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="signupPost" 
                                    name="signupPost"
                                    onChange={this.handleInputChange}
                                    placeholder="your post in your company" required
                                />
                                <span className="help-block error">{validateSignup.signupPost.message}</span>
                            </div>                            
                        </div>
                        <div className="form-row">
                            <div className={`col-md-6 mb-3 ${validateSignup.signupDept.isInValid && 'has-error'}`}>
                                <label htmlFor="signupDept">Department</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="signupDept" 
                                    name="signupDept"
                                    onChange={this.handleInputChange}
                                    placeholder="your department" required
                                />
                                <span className="help-block error">{validateSignup.signupDept.message}</span>
                            </div>

                            <div className={`col-md-6 mb-3 ${validateSignup.signupManager.isInValid && 'has-error'}`}>
                                <label htmlFor="signupManager">Manager</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="signupManager" 
                                    name="signupManager"
                                    onChange={this.handleInputChange}
                                    placeholder="manager's name" required
                                />
                                <span className="help-block error">{validateSignup.signupManager.message}</span>
                            </div>                            
                        </div>
                        
                        <div className="form-row">

                            <div className={`form-group col-md-6 ${validateSignup.signupPhone.isInValid && 'has-error'}`}>
                                <label htmlFor="signupPhone">Telephone Number</label>
                                <input type="phone" 
                                    className="form-control" 
                                    id="signupPhone" 
                                    name="signupPhone"
                                    onChange={this.handleInputChange}
                                    placeholder="Phone Number" required
                                />
                                <span className="help-block error">{validateSignup.signupPhone.message}</span>
                            </div>

                            <div className={`form-group col-md-3 ${validateSignup.signupDob.isInValid && 'has-error'}`}>                    
                                <label htmlFor="signupDob">Date of Birth</label>
                                <input type="date" 
                                    className="form-control"
                                    name="signupDob" 
                                    onChange={this.handleInputChange}
                                    id="signupDob" required
                                />
                                <span className="help-block error">{validateSignup.signupDob.message}</span>
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


                            <div className={`col-md-5 mb-3 ${validateSignup.signupCity.isInValid && 'has-error'}`}>
                                <label for="signupCity">City</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="signupCity"
                                    name="signupCity" 
                                    onChange={this.handleInputChange}
                                    placeholder="City" required
                                />
                                <span className="help-block error">{validateSignup.signupCity.message}</span>
                            </div>

                            <div className={`col-md-4 mb-3 ${validateSignup.signupState.isInValid && 'has-error'}`}>
                                <label for="signupState">State</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="signupState" 
                                    name="signupState"
                                    onChange={this.handleInputChange}
                                    placeholder="State" required
                                />
                                <span className="help-block error">{validateSignup.signupState.message}</span>
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