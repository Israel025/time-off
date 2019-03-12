import React from 'react';
import '../../assets/styles/SignupBtn.css';


class SignupBtn extends React.Component{
    render() {
      return (
        <div className="signup-btn">
            <button className="btn btn-primary btn-lg"  style={{ fontWeight: 'bold', marginRight:'20px'}}>
                SignUp Now
            </button>
        </div>
      );
    }
}
export default SignupBtn;