import React, { Component } from 'react';
import { connect } from "react-redux";
import { RegisterRequest } from '../State/actions'
import { Link } from 'react-router-dom';


class Register extends Component {
  state = {
    firstname: '',
    lastname: '',
    username: '',
    password: ''
  }

  render() {
    return (
      <div className="col-xl-5 col-lg-6 col-md-10 col-sm-12 mx-auto mt-lg-5">
        <div className="card">
          <div className="card-body">
            <h3>Register</h3>
            <div className="md-form">
              <input onChange={this.handleChange.bind(this)} name="firstname" type="text" placeholder="First Name" className="form-control" />
            </div>
            <hr />
            <div className="md-form">
              <input onChange={this.handleChange.bind(this)} name="lastname" type="text" placeholder="Last Name" className="form-control" />
            </div>
            <hr />
            <div className="md-form">
              <input onChange={this.handleChange.bind(this)} name="username" type="text" placeholder="Username" className="form-control" />
            </div>
            <hr />
            <div className="md-form">
              <input onChange={this.handleChange.bind(this)} name="password" type="password" placeholder="Password" className="form-control" />
            </div>
            <div className="text-center">
              <button className="btn btn-primary" onClick={this.register.bind(this)}>Sign up</button>
              <hr />
              Already registered?
             <Link to="/login" id="linkB"> Sign in</Link>
            </div>
          </div>
        </div>
      </div>

    );
  }

  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value })
  }

  async register() {
    let mandatory = this.state;
    if (mandatory.firstname === '') {
      alert('First Name required!')
    }
    else if (mandatory.lastname === '') {
      alert('Last Name required!')
    }
    else if (mandatory.username === '') {
      alert('Username required!')
    }
    else if (mandatory.password === '') {
      alert('Password required!')
    }
    else {
      this.props.registerRequest(RegisterRequest(this.state));
      alert('Registration Successful');
      this.props.history.push("/login");
      
    }
  }
}
const mapStateToProps = (state) => {
  return { msg: state.msg };
}

const mapDispatchToProps = dispatch => {
  return {
    registerRequest: function (data) {
      return dispatch(data);
    }
  }
}

const register = connect(mapStateToProps, mapDispatchToProps)(Register)
export default register;
