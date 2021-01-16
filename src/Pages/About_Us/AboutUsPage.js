import React, {Component} from 'react';

import MainHeaderForPage from "../../Components/Header/Header";
import MainNavigationBar from "../../Components/Navigation_Bar/NavigationBar";
import Footer from "../../Components/Footer/Footer";

import AboutUsStyle from "./AboutUsPage.module.css";

class AboutUsPage extends Component {
    render() {
        return (
            <React.Fragment>
            <MainHeaderForPage/>
            <MainNavigationBar/>
            <Header/>
            <Footer/>
            </React.Fragment>
        );
    }
}

const Header = () =>
    <div className={AboutUsStyle.headerContainer}>
        <div className={AboutUsStyle.header}>
            About Us
        </div>
    </div>


export default AboutUsPage;