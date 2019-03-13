import React from 'react';
import LoginBtn from './LoginBtn';
import '../../assets/styles/Header.module.css';
import Png from '../../assets/images/logos/logo.png';
// import { Link } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            
            <header className="header" style={{backgroundColor:'#000000'}}>
                <nav className="navbar">
                    <div className="header-left" style={{marginLeft:'20px'}}>
                        <a href="#"><img className="left-png" src={Png} alt="Brand-Logo"/></a>
                    </div> 
                    <div className="header-right">                    
                        <LoginBtn/>
                    </div>                   
                </nav>                
            </header>
        );
    }
}
export default Header;