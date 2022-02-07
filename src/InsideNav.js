import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const InsideNav = (props) => {
    let { state } = useLocation();
    console.log(state)
    let [propsValue, setPropsValue] = useState(state && state.propsValue || 'TEST PROPS VALUE STRING');
    console.log(propsValue)
    const getNavItem = props.insideNavItem.map((item) => {
        return <li key={item.text}>
            <Link to="#" style={{ display: 'block' }} className={`${item.text === props.option ? "inside_nav--active" : ""}`} ref={props.link}>{item.text}</Link>
        </li>
    })
    return (
        <>
            <div className="container-fluid px-0 position-fixed" style={{ zIndex: '300' }}>
                <ul className="list-unstyled d-flex justify-content-around inside-nav bg-light" onClick={props.handleClick} >
                    {getNavItem}
                </ul>
                {props.children}
            </div>
            <div className="d-table" style={{ height: '60px' }}></div>
        </>
    )
}
export default InsideNav;