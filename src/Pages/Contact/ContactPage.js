import React, {Component} from 'react';
import MainHeaderForPage from "../../Components/Header/Header";
import MainNavigationBar from "../../Components/Navigation_Bar/NavigationBar";
import Footer from "../../Components/Footer/Footer";
import ContactStyles from "./ContactPage.module.css"

class ContactPage extends Component {
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
    <div className={ContactStyles.headerContainer}>
        <div className={ContactStyles.header}>
            Contact Us
        </div>
    </div>


export default ContactPage;