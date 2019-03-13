import React from 'react';
import Styles from '../../assets/styles/Home.module.css';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../../assets/styles/Home.css';
import Side from '../../assets/images/side2.jpg';
import SignupBtn from '../common/SignupBtn';

class Login extends React.Component{

    render() {
      return (
        <div className=".mx-auto px-0">

            <div className={Styles["head-div"]}>
                <Header/>
            </div>
            <div className="row index">
                <div className="col-md-4">
                    <SignupBtn/>
                    <img className="index" alt="sideBar" src={Side}/>
                </div>
                <div className="col-md-8 row .mx-auto px-0">
                    
                </div>            
            </div>
            <div className={Styles["foot-div"]}>
                <Footer/>
            </div>
          
        </div>
      );
    }
}
export default Login;