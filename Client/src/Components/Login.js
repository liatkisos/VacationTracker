import React, { Component } from 'react';
import { connect } from "react-redux";
import { LoginRequest } from '../State/actions';
import { Link } from 'react-router-dom';


class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  render() {
    return (
      <div className="col-xl-5 col-lg-6 col-md-10 col-sm-12 mx-auto mt-lg-5">
        <div className="card">
          <div className="card-body">
            <h3>Login</h3>
            <div className="md-form">
              <i className="fa fa-user prefix"></i>
              <input autoFocus onChange={this.handleChange.bind(this)} name="username" type="text" placeholder="Username" className="form-control" />
            </div>
            <hr />
            <div className="md-form">
              <i className="fa fa-lock prefix"></i>
              <input onChange={this.handleChange.bind(this)} name="password" type="password" placeholder="Password" className="form-control" />
            </div>
            <div className="md-form">
            {/* {this.props.msg} */}
            </div>
            <div className="text-center">
              <button className="btn btn-primary" onClick={this.login.bind(this)}>Login</button>
              <hr />
              Don't have an account yet?
              <Link to="/register" id="linkB"> Sign up!</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value })
  }

  async login() {
    if (!this.state.username) {
      alert('Username required!');
    }
    else if (!this.state.password) {
      alert('password required!');
    }
    else {
      this.props.loginRequest(LoginRequest(this.state));
    }
  }
}

const mapStateToProps = (state) => {
  //debugger;
  return { isLogged: state.isLogged, role: state.role, msg: state.msg };
}

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: function (data) {
      return dispatch(data);
    }
  }
}
const login = connect(mapStateToProps, mapDispatchToProps)(Login)
export default login;
