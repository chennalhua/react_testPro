import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import Login from "./Login"; //登入
import Test from "./view/Directory";
import Canvas from "./view/html2canvanPage"
import DomToImg from "./view/domToImg"
import Cus from "./view/visitCustomer"
import Phone from "./view/IsIOSorAndroid"
import Pdf from "./view/downloadpdf"
import Pet from './view/pet/Pet'
import Article from './view/pet/Article'
import ArticlePage from './view/pet/ArticlePage'
import DomainShareLocalStrong from './view/DomainShareLocalstrong';
// import Ecard from "./view/insurancePolicy/personal/Ecard"

const AppRoute = (props) => {
    return (
        <Router>
            <Route exact path="/login"><Login /></Route> {/* 登入 */}
            {/* <Route exact path="/"><Cus /></Route> */}
            <Route exact path="/test"><Test /></Route>
            <Route exact path="/canvas"><Canvas /></Route>
            <Route exact path="/jspdf"><DomToImg /></Route>
            {/* <Route exact path="/viscus"><Cus /></Route> */}
            <Route exact path="/phone"><Phone /></Route>
            <Route exact path="/pdf"><Pdf /></Route>
            <Route exact path="/pet"><Pet /></Route>
            <Route exact path="/aboutPet"><Article /></Route>
            <Route exact path="/aboutPet/:id"><ArticlePage /></Route>
            <Route exact path="/a"><DomainShareLocalStrong /></Route>
        </Router>
    )
}
export default AppRoute