import React from 'react';
import { Link } from 'react-router-dom';
import Styles from '../../assets/styles/Home.module.css';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../../assets/styles/Home.css';
import Side from '../../assets/images/side2.jpg';
import Pic1 from '../../assets/images/carousel pics/health-ish.jpg';
import Pic2 from '../../assets/images/carousel pics/family-vacation.jpg';
import Pic3 from '../../assets/images/carousel pics/maternity.jpg';
import Pic4 from '../../assets/images/carousel pics/travelling.jpg';
import Fun from '../../assets/images/icons-pngs/leisure.png';
import Health from '../../assets/images/icons-pngs/health.png';
import Family from '../../assets/images/icons-pngs/maternity.png';
import Travel from '../../assets/images/icons-pngs/travel.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import Carousel from 'react-bootstrap/Carousel';
import SignupBtn from '../common/SignupBtn';
class Home extends React.Component{

    render() {
      return (
        <div className=".mx-auto px-0">

            <div className={Styles["head-div"]}>
                <Header/>
            </div>
            <div className="row index">
                <div className="col-md-4">
                    <Link to='/sign-up'>
                        <SignupBtn/>
                    </Link>
                    <img className="index" alt="sideBar" src={Side}/>
                </div>
                <div className="col-md-8 row mx-auto px-0">
                    <div className="col-md-12 range">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Pic1} class="d-block w-100 carr" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={Pic2} class="d-block w-100 carr" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={Pic3} class="d-block w-100 carr" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={Pic4} class="d-block w-100 carr" alt="..."/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>                        
                    </div>
                    <div className="row col-mid-12">
                        <div className="col-md-12 top-info">
                            <h2>TimeOff Management</h2>
                            <p>...your one stop timeoff management portal</p>
                        </div>
                        <div className="row col-md-12 icons-div">
                            <div className="col-md-3">
                                <div className="icon-text"><p>Time off for Pleasure?</p></div>
                                <div><img alt="fun-icon" className={Styles["icons"]} src={Fun}/></div>
                            </div>
                            <div className="col-md-3">
                                <div className="icon-text"><p>Need to fix your Health?</p></div>
                                <div><img alt="health-icon" className={Styles["icons"]} src={Health}/></div>
                            </div>
                            <div className="col-md-3">
                                <div className="icon-text"><p>Family time is great</p></div>
                                <div><img alt="fam-icon" className={Styles["icons"]} src={Family}/></div>
                            </div>
                            <div className="col-md-3">
                                <div className="icon-text"><p>Think of travelling?</p></div>
                                <div><img alt="travel-icon" className={Styles["icons"]} src={Travel}/></div>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
            <div className={Styles["foot-div"]}>
                <Footer/>
            </div>
          
        </div>
      );
    }
}
export default Home;