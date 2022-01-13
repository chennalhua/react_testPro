import React from 'react';
import { HashRouter  as Router, Route } from "react-router-dom";

import Login from "./Login"; //登入
import Test from "./view/Directory";
import Canvas from "./view/html2canvanPage"
import DomToImg from "./view/domToImg"
import Cus from "./view/visitCustomer"
import Phone from "./view/IsIOSorAndroid"
// import Ecard from "./view/insurancePolicy/personal/Ecard"

const AppRoute = (props) => {
    return (
        <Router>
            <Route exact path="/login"><Login /></Route> {/* 登入 */}
            <Route exact path="/test"><Test /></Route>
            <Route exact path="/canvas"><Canvas /></Route>
            <Route exact path="/jspdf"><DomToImg /></Route>
            <Route exact path="/viscus"><Cus /></Route>
            <Route exact path="/phone"><Phone /></Route>
        </Router>
    )
}
export default AppRoute