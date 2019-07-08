import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';


class Home extends Component {
    render() {
        return (
            
            <div className="page-header">
                <div className="container text-center">
                    <div>
                        <h1 className="title">Vacation Tracker</h1>
                        <h4 className="description">Find Your Dream Vacation... Before Someone Else Does!</h4>
                    </div>
                    <div className="row">
                        <Route exact path="/" component={Login}/>
                        <Route path="/login" component={Login}/>
                        <Route path ="/register" component={Register}/>
                    </div>
                </div>
            </div>
           
        );
    }
}

export default Home;
