import React from 'react';
import { Link } from "react-router-dom";

const InsideNav = (props) => {
    const getNavItem = props.insideNavItem.map((item) => {
        return <li key={item.text}>
            <Link to="#" style={{ display: 'block' }} className={`${item.text === props.option ? "inside_nav--active" : ""}`} ref={props.link}>{item.text}</Link>
        </li>
    })
    return (
        <>
            <div className="container-fluid px-0 position-fixed" style={{zIndex:'300'}}>
                <ul className="list-unstyled d-flex justify-content-around inside-nav bg-light" onClick={props.handleClick} >
                    {getNavItem}
                </ul>
            </div>
            <div className="d-table" style={{ height: '60px' }}></div>
        </>
    )
}
export default InsideNav;