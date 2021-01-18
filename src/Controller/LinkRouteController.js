import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {allLinks} from "./Links";

const LinkRouteController = () =>
    <Router>
        <Switch>
            {allLinks.map(link => (
                <Route key={link.endpoint} exact path={link.endpoint} component={link.page}/>))}
        </Switch>
    </Router>

export default LinkRouteController;
