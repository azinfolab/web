import React, { Component } from 'react';
import axios from 'axios';

export default class loginUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password:'',
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

    axios.post('http://localhost:5000/logincheck', user)
      .then(res => console.log(res.data));


    console.log("Login successful !");
    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    return (
      <div>
        
        <form onSubmit={this.onSubmit}>
        
          <div className="form-group"> 
          <h1>Login</h1>
          <h3> </h3>
            <label>Email: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group"> 
          
          <h3> </h3>
            <label>Password: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="submit" className="btn btn-sec" />
          </div>
        </form>
      </div>
    )
  }
}