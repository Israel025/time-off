import React from 'react';
import '../../assets/styles/LoginBtn.module.css';


class LoginBtn extends React.Component{
    render() {
      return (
        <div className="login-btn">
            <button className="btn btn-primary "  style={{ fontWeight: 'bold', marginRight:'10px'}}>
                Login
            </button>
        </div>
      );
    }
}
export default LoginBtn;