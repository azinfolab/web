import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from "react-router";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password:'',
      isSignedUp: false // <-- initialize the signup state as false

    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
    }

    console.log(user);

    axios.post('http://localhost:5000/signuppassport', user)
      .then(res => { 
        console.log(res.status);
        if(res.status === 200){
        console.log("register successful");
        this.setState({ isSignedUp: true });
        
      }});
        

    
    
    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    if (this.state.isSignedUp) {
      // redirect to home if signed up
      return <Redirect to = {{ pathname: "/" }} />;
    }
    return (
      <div>
        
        <form onSubmit={this.onSubmit}>
        
          <div className="form-group"> 
          <h4>Let us reach out to you !</h4>
          <h3> </h3>
            <label>Email: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          {/* <div className="form-group"> 
          
          <h3> </h3>
            <label>Password: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
                />
          </div> */}
          <div className="form-group">
            <input type="submit" value="submit" className="btn btn-primary" />
            
          </div>
        </form>
        <h3> </h3>
      </div>
    )
  }
}