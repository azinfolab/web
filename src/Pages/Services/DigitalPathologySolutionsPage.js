import React, {Component} from 'react';
import MainHeaderForPage from "../../Components/Header/Header";
import MainNavigationBar from "../../Components/Navigation_Bar/NavigationBar";
import Footer from "../../Components/Footer/Footer";

class DigitalPathologySolutionsPage extends Component {
    render() {
        return (
            <React.Fragment>
                <MainHeaderForPage/>
                <MainNavigationBar/>
                <div>
                    You are on Digital Pathology Solutions Page.
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default DigitalPathologySolutionsPage;