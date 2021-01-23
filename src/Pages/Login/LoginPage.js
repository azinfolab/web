import React, {Component, useState} from 'react';
import {Link} from "react-router-dom";
import {mainPageLinks, signUpPageLink} from "../../Controller/Links";
import LoginStyles from "./LoginPage.module.css"
import {LinkButton} from "../../Components/Buttons";

class LoginPage extends Component {
    render() {
        return (
            <Login/>
        );
    }
}

const Login = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);

    return (
        <div className={LoginStyles.loginPageContainer}>
            <LinkButton style={LoginStyles.closeLoginPageButton} link={mainPageLinks[0].endpoint} text={"X"}/>
            <div className={LoginStyles.loginContentContainer}>
                <div className={LoginStyles.loginContentHeader}>
                    <h1>Login</h1>
                    <div className={LoginStyles.textWithButtonContainer}>
                        <h4>Don't have an account? </h4>
                        <Link to={signUpPageLink.endpoint}>
                            <button>Sign up</button>
                        </Link>
                    </div>
                </div>
                {showLoginForm ? <LoginForm/> :
                    <button onClick={() => setShowLoginForm(true)} className={LoginStyles.loginWithEmailButton}>Login
                        with email</button>}
            </div>
        </div>
    );
}


const LoginForm = () => {
    const loginHandler = () => {

    }

    const forgotPasswordHandler = () => {

    }

    return (
        <div className={LoginStyles.loginContainer}>
            <form className={LoginStyles.loginFormContainer}>
                <div className={LoginStyles.loginInputContainer}>
                    <label>Email</label>
                    <input type="text"/>
                </div>
                <div className={LoginStyles.loginInputContainer}>
                    <label>Password</label>
                    <input type="password"/>
                </div>
            </form>
            <button onClick={forgotPasswordHandler} className={LoginStyles.forgotPasswordButton}>Forgot password?</button>
            <button onClick={loginHandler} className={LoginStyles.loginButton}>Log In</button>
        </div>
    );
}

export default LoginPage;