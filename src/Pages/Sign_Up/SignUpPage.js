import React, {Component, useState} from "react";
import {mainPageLinks} from "../../Controller/Links";
import {Link} from "react-router-dom";
import SignUpStyles from "./SignUpPage.module.css"
import {LinkButton} from "../../Components/Buttons";

class SignUpPage extends Component {
    render() {
        return (
            <SignUp/>
        );
    }
}

const SignUp = () => {
    const [showSignUpForm, setShowSignUpForm] = useState(false);

    return (
        <div className={SignUpStyles.signUpPageContainer}>
            <LinkButton style={SignUpStyles.closeSignUpPageButton} link={mainPageLinks[0].endpoint} text={"X"}/>
            <div className={SignUpStyles.signUpContentContainer}>
                <div className={SignUpStyles.signUpContentHeader}>
                    <h1>Sign Up</h1>
                    <div className={SignUpStyles.textWithButtonContainer}>
                        <h4>Already have an account? </h4>
                        <Link to={mainPageLinks[4].endpoint}>
                            <button>Login</button>
                        </Link>
                    </div>
                </div>
                {showSignUpForm ? <SignUpForm/> :
                    <button onClick={() => setShowSignUpForm(true)} className={SignUpStyles.signUpWithEmailButton}>Sign
                        up with email</button>}
            </div>
        </div>
    );
}

const SignUpForm = () => {
    return (
        <div className={SignUpStyles.signUpContainer}>
            <form className={SignUpStyles.signUpFormContainer}>
                <div className={SignUpStyles.signUpInputContainer}>
                    <label>Email</label>
                    <input type="text"/>
                </div>
                <div className={SignUpStyles.signUpInputContainer}>
                    <label>Password</label>
                    <input type="password"/>
                </div>
            </form>
            <button className={SignUpStyles.signUpButton}>Sign Up</button>
        </div>
    );
}

export default SignUpPage;