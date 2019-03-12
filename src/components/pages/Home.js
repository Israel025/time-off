import React from 'react';
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


import Carousel from 'react-bootstrap/Carousel';

class Home extends React.Component{

    render() {
      return (
        <div className={Styles["home-content"]}>

            <div className={Styles["head-div"]}>
                <Header/>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <img className="left-img" alt="side Picture" src={Side}/>
                </div>
                <div className="col-md-8 row">
                    <div className={Styles["carousel-div"]}>
                        {/* <div className={Styles["carousel-main"]}>
                            <Carousel className={Styles["carousel-main"]}>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Pic1}
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Pic2}
                                    alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Pic3}
                                    alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Pic4}
                                    alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>

                        </div>                     */}
                    </div>
                    {/* <div className={Styles["info-div"]}>
                        <div className={Styles["message-div"]}>
                            <h2>TimeOff Management</h2>
                            <p>Your one stop timeoff management portal</p>
                        </div>
                        <div className={Styles["icons-div"]}>
                            <div className="col-md-3">
                                <div><p>Take time off for Pleasure</p></div>
                                <div><img alt="fun-icon" className={Styles["icons"]} src={Fun}/></div>
                            </div>
                            <div className="col-md-3">
                                <div><p>Your Health matters, Take time off</p></div>
                                <div><img alt="health-icon" className={Styles["icons"]} src={Health}/></div>
                            </div>
                            <div className="col-md-3">
                                <div><p>Create time for your family</p></div>
                                <div><img alt="fam-icon" className={Styles["icons"]} src={Family}/></div>
                            </div>
                            <div className="col-md-3">
                                <div><p>Have you ever think of travelling?</p></div>
                                <div><img alt="travel-icon" className={Styles["icons"]} src={Travel}/></div>
                            </div>
                        </div>
                    </div> */}
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