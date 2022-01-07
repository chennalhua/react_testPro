import React from 'react';
import { HashRouter  as Router, Route } from "react-router-dom";

import Login from "./Login"; //登入
import Test from "./view/Directory";
import Canvas from "./view/html2canvanPage"

const AppRoute = (props) => {
    return (
        <Router>
            <Route exact path="/"><Login /></Route> {/* 登入 */}
            <Route exact path="/test"><Test /></Route>
            <Route exact path="/canvas"><Canvas /></Route>
        </Router>
    )
}
export default AppRoute