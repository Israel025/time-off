import React from 'react';


class Footer extends React.Component{
    render() {
      return (
        <div>

            <footer className="page-footer font-small black pt-4">
            
                <div className="container text-center text-md-left">
            
                    <div className="row d-flex align-items-center">
                    
                        <div className="col-md-7 col-lg-8">
                        
                            <p className="text-center text-md-left">© 2018 Copyright:
                            <a href="#"> <strong> MDBootstrap.com</strong></a>
                            </p>

                        </div>

                        <div className="col-md-5 col-lg-4 ml-lg-0">

                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                    <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                    <i className="fab fa-google-plus-g"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
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