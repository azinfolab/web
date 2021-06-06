import React from "react";

import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      
        <Banner title=" Contact">
          <h3>

          İstanbul Üniversitesi Cerrahpaşa Avcılar Yerleşkesi Teknokent Binası, 34320 Avcılar/İstanbul, Turkey       

          
           
          </h3>
          <h4>
          Tel: +15072103999
          </h4>
          <Link to="/login-user" className="btn-primary">
            Login Now
          </Link>
          <h4>
          or
          </h4>
          <Link to="/user" className="btn-sec">
            Register 
          </Link>
          
        </Banner>
      
      
    </>
  );
};

export default Contact;