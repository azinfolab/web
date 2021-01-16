import React, {Component} from 'react';
import Footer from "../../Components/Footer/Footer";
import MainHeaderForPage from "../../Components/Header/Header";
import MainNavigationBar from "../../Components/Navigation_Bar/NavigationBar";
import ServicesStyle from "./ServicesPage.module.css"

class Services extends Component {
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
    <div className={ServicesStyle.headerContainer}>
        <div className={ServicesStyle.header}>
            Services
        </div>
    </div>

export default Services;