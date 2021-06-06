import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import CreateUser from "../components/create-user.component"

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="AZ info LAB Home Page"
          subtitle="Health Solutions"
        >
          <Link to="/user" className="btn-primary">
            Sign up for our newsletter! 
          </Link>
        </Banner>
      </Hero>
     

      <Services />
      

      
    </>
  );
};

export default home;
