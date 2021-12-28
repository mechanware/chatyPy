import React, { Component } from 'react';
import SignUp from './SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './LoginForm'
import Home from './Home'


class Routing extends Component {
    render() {
        return (
            <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}></Route> 
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/signin" component={LoginForm}/>
                </Switch>
            </Router>

            </>
        );
    }
}

export default Routing;

