import React from 'react';
import Styles from '../../assets/styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const footer = {
//     backgroundColor: '#000000'
//   };
// style={{backgroundColor: '#000000'}}
class Footer extends React.Component{
    render() {
      return (
        <div className={Styles["page-footer"]}>

            <footer className={Styles["page-footer"]}>
            
                <div className="container text-center text-md-left">
            
                    <div className="row d-flex align-items-center">
                    
                        <div className="col-md-7 col-lg-8">
                        
                            <p className="text-center text-md-left">
                                <a href="#"> 
                                    <small className={Styles["copy-text"]}>
                                        Copyright &copy; 2019 All rigth reserved Zyx<sup>&reg;</sup> 
                                    </small>                            
                                </a>
                            </p>

                        </div>

                        <div className="col-md-5 col-lg-4 ml-lg-0">

                            <div className="text-md-right">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="#" className="btn-floating btn-sm">
                                            <FontAwesomeIcon className={Styles["fa"]} icon={['fab', 'facebook']} size="lg" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="btn-floating btn-sm">
                                            <FontAwesomeIcon className={Styles["fa"]} icon={['fab', 'twitter']} size="lg"/>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="btn-floating btn-sm">
                                            <FontAwesomeIcon className={Styles["fa"]} icon={['fab', 'linkedin']} size="lg"/>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="btn-floating btn-sm ">
                                            <FontAwesomeIcon className={Styles["fa"]} icon={['fab', 'github']} size="lg"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

            </footer>
        
        </div>
      );
    }
}
export default Footer;