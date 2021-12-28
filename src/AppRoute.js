import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./Login"; //登入
import Test from "./Directory"; //登入

const AppRoute = (props) => {
    return (
        <Router>
            <Route exact path="/login"><Login /></Route> {/* 登入 */}
            <Route exact path="/test"><Test /></Route> {/* 登入 */}
        </Router>
    )
}
export default AppRoute