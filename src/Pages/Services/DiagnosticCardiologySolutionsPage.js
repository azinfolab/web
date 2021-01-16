import React, {Component} from 'react';
import MainHeaderForPage from "../../Components/Header/Header";
import MainNavigationBar from "../../Components/Navigation_Bar/NavigationBar";
import Footer from "../../Components/Footer/Footer";

class DiagnosticCardiologySolutionsPage extends Component {
    render() {
        return (
            <React.Fragment>
                <MainHeaderForPage/>
                <MainNavigationBar/>
                <div>
                    You are on Diagnostic Cardiology Solutions Page.
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default DiagnosticCardiologySolutionsPage;