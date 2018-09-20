import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home';
import Dashboard from './components/dashboard';
import Signin from './components/signin';
import Signup from './components/signup';


import './App.css';

export default function App(props) {
    return (
        <Router>
            <div className="app">                
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/signup" component={Signup} />
                </main>
            </div>
        </Router>
    );
}