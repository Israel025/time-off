import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import pages
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import EmployeeDash from './components/pages/EmployeeDash';
import AbsenceRequest from './components/pages/AbsenceRequest';
import Teamview from './components/pages/TeamView';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        // this.connecToServer = this.connecToServer.bind(this);
    }
    
    connecToServer = () => {
        fetch('/');
    }
    
    componentDidMount() {
        this.connecToServer();
    }


    render(){
      return (
            <React.Fragment>
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/sign-up" component={SignUp}/>
                    <Route path="/employee-dash" component={EmployeeDash}/>
                    <Route path="/absence-request" component={AbsenceRequest}/>
                    <Route path="/team-view" component={Teamview}/>
                </Switch>
            </React.Fragment>        
        );
    }
  }
  
export default App;