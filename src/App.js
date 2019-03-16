import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import pages
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
// import EmployeeDash from './pages/Portfolio';
// import RequestForm from './components/pages/Home';
// import Teamview from './components/pages/Home';


class App extends React.Component {
    render(){
      return (
            <React.Fragment>
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/sign-up" component={SignUp}/>
                    {/* <Route path="/employee-dash" component={EmployeeDash}/>
                    <Route path="/request-form" component={RequestForm}/>
                    <Route path="/team-view" component={Teamview}/> */}
                </Switch>
            </React.Fragment>        
        );
    }
  }
  
export default App;