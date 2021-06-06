import React from "react";

import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form>
                
                <div className="form-group">
                <h3>Sign In</h3>

                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                    <button  className="btn btn-primary">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                </div>

                
            </form>
  );
};

export default Login;