import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Aboutus from "./pages/Aboutus";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";


import loginUser from "./components/login-user"
import CreateUser from "./components/create-user.component";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Switch } from "react-router-dom";
import AdminView from "./pages/AdminView";
import LandingPage from "./pages/LandingPage";




function App() {
  

  return (
    
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Services/" component={Services} />
        <Route exact path="/Aboutus/" component={Aboutus} />
        <Route exact path="/Login/" component={Login} />
        <Route exact path="/Contact/" component={Contact} />
        <Route exact path="/Adminview/" component={AdminView} />
        <Route exact path="/Landingpage/" component={LandingPage} />
        <Route path="/user" component={CreateUser} />
        <Route path="/login-user" component={loginUser} />
        
        <Route component={Error} />
      </Switch>
      
      
      
    </>
    
  );

  } 


export default App;
