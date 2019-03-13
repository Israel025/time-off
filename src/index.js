import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import Login from './components/pages/Login';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js';
import $ from 'jquery';
// import '../src/assets/styles/resetCss.css';
// import './assets/styles/mdb.min.css';
// import './assets/scripts/mdb.min.js';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import Main from './Main';

library.add(fab, faCheckSquare, faCoffee);

// const App = () => (
//     <BrowserRouter>
//       <Main />
//     </BrowserRouter>
// )

ReactDOM.render(<Login/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
