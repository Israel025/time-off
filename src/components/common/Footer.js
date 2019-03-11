import React from 'react';
import '../../assets/styles/Footer.module.css';

const footer = {
    backgroundColor: '#000000'
  };
class Footer extends React.Component{
    render() {
      return (
        <div style={{backgroundColor: '#000000'}}>

            <footer style={{backgroundColor: '#000000'}}>
            
                <div className="container text-center text-md-left">
            
                    <div className="row d-flex align-items-center">
                    
                        <div className="col-md-7 col-lg-8">
                        
                            <p className="text-center text-md-left">© 2019 Copyright:
                            <a href="#"> 
                            <p><small>Copyright &copy; 2019 All rigth reserved Zyx<sup>&reg;</sup> </small></p>
                            </a>
                            </p>

                        </div>

                        <div className="col-md-5 col-lg-4 ml-lg-0">

                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm">
                                    <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm">
                                    <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm">
                                    <i className="fab fa-google-plus-g"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a className="btn-floating btn-sm">
                                    <i className="fab fa-linkedin-in"></i>
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