import {NavLink} from 'react-router-dom';

import {IoPersonCircleSharp} from 'react-icons/io5'

import * as NavigationLinks from "./NavigationLinks";
import NavigationBarStyle from "./NavigationBar.module.css";
import Logo from "./images/logo_sharp.png";

const MainNavigationBar = () =>
    <div className={NavigationBarStyle.navigationContainer}>
        <img src={Logo} alt="Logo" height="200px" width="400px"/>
        <nav>
            <ul className={NavigationBarStyle.linksContainer}>
                {NavigationLinks.mainPageLinks.map(link => (NavigationItem(link)))}
            </ul>
        </nav>
    </div>

const NavigationItem = (linkObject) =>
    <li className={NavigationBarStyle.links} id={linkObject.name}>
        <NavLink exact activeClassName={NavigationBarStyle.activeLink}
                 to={linkObject.endpoint}>{"LOGIN" !== linkObject.name ? linkObject.name :
            <div className={NavigationBarStyle.loginContainer}><IoPersonCircleSharp
                className={NavigationBarStyle.personIconSVG}/>{linkObject.name}</div>}</NavLink>
    </li>


export default MainNavigationBar;