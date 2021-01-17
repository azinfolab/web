/*
 *
 */
import HomePage from "../Pages/Home/HomePage";
import AboutUsPage from "../Pages/About_Us/AboutUsPage";
import ContactPage from "../Pages/Contact/ContactPage";
import LoginPage from "../Pages/Login/LoginPage";

/*
 *
 */
import DigitalPathologySolutionsPage from "../Pages/Services/DigitalPathologySolutionsPage";
import DiagnosticCardiologySolutionsPage from "../Pages/Services/DiagnosticCardiologySolutionsPage";
import DiagnosticRadiologySolutionsPage from "../Pages/Services/DiagnosticRadiologySolutionsPage";
import Services from "../Pages/Services/Services";

import SignUpPage from "../Pages/Sign_Up/SignUpPage";

/*
 *
 */
export const mainPageLinks = [
    {endpoint: "/", page: HomePage, name:"HOME"},
    {endpoint: "/aboutus", page: AboutUsPage, name:"ABOUT US"},
    {endpoint: "/services", page: Services, name: "SERVICES"},
    {endpoint: "/contact", page: ContactPage, name: "CONTACT"},
    {endpoint: "/login", page: LoginPage, name: "LOGIN"}
];

/*
 *
 */
export const serviceDropDownMenuPageLinks = [
    {endpoint: "/digital-pathology-solutions", page: DigitalPathologySolutionsPage, name: "DIGITAL PATHOLOGY SOLUTIONS"},
    {endpoint: "/diagnostic-cardiology-solutions", page: DiagnosticCardiologySolutionsPage, name: "DIAGNOSTIC CARDIOLOGY SOLUTIONS"},
    {endpoint: "/diagnostic-radiology-solutions", page: DiagnosticRadiologySolutionsPage, name: "DIAGNOSTIC RADIOLOGY SOLUTIONS"}
];

/*
 *
 */
export const signUpPageLink = {endpoint: "/signup", page: SignUpPage, name:"SIGN UP"}

/*
 *
 */
export const allLinks = [...mainPageLinks, ...serviceDropDownMenuPageLinks, signUpPageLink];