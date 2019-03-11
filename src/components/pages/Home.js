import React from 'react';
import Styles from '../../assets/styles/Home.module.css';
import Header from '../common/Header';
// import Footer from '../common/Footer';
import '../../assets/styles/Home.css';



class Home extends React.Component{

    render() {
      return (
        <div className={Styles["home-content"]}>

            <div className={Styles["head-div"]}>
                {/* <Header/> */}
            </div>
            <div className={Styles["body-div"]}>
                <div className={Styles["left-div"]}></div>
                <div className={Styles["right-div"]}>
                    <div className={Styles["carousel-div"]}></div>
                    <div className={Styles["info-div"]}>
                        <div className={Styles["message-div"]}></div>
                        <div className={Styles["icons-div"]}></div>
                    </div>
                </div>            
            </div>
            <div className="foot-div">
                {/* <Footer/> */}
            </div>
          
        </div>
      );
    }
}
export default Home;