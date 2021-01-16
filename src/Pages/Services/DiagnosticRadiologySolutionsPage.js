import React, {Component} from 'react';
import Footer from "../../Components/Footer/Footer";
import MainHeaderForPage from "../../Components/Header/Header";
import MainNavigationBar from "../../Components/Navigation_Bar/NavigationBar";

class DiagnosticRadiologySolutionsPage extends Component {
    render() {
        return (
            <React.Fragment>
                <MainHeaderForPage/>
                <MainNavigationBar/>
                <div>
                    You are on Diagnostic Radiology Solutions Page.
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default DiagnosticRadiologySolutionsPage;