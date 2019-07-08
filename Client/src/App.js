import React, { Component } from 'react';
import { connect } from "react-redux";
import { LoginRequest } from './State/actions';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import UserInterface from './Components/UserUi/UserInterface';
import Admin from './Components/AdminUi/Admin';


class App extends Component {

  componentDidMount(){
    this.props.dispatch(LoginRequest());
  }

  render() {
    if (this.props.isLogged === true && this.props.role === "User") {
      return (
        <React.Fragment>
          <UserInterface />
        </React.Fragment>
      )
    }
    if (this.props.isLogged === true && this.props.role === "Admin") {
      return (
        <React.Fragment>
          <Admin />
        </React.Fragment>
      )
    }
    else {
      return (
          <div className="App">
         <Home/>
            <Footer />
          </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { isLogged: state.isLogged, role: state.role, msg: state.msg };

}

const mapDispatchToProps = (dispatch) => {
  let obj = {
    dispatch: (data) => {
      dispatch(data);
    }
  }
  return obj;
}

const app = connect(mapStateToProps, mapDispatchToProps)(App);
export default app;

