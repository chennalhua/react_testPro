import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { Link, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = (props) => {
    let match = useRouteMatch();
    let navItem = [{ linkName: '首頁', path: '/#/pet' }, { linkName: '知識大全', path: '/#/aboutPet' }]


    const handleEvent = {
        goToPage: function (e) {
            e.preventDefault();
            let { innerText } = e.target
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
            if (innerText === '首頁') {
                window.location.href = '/react_testPro/#/pet' 
            } else if (innerText === '知識大全') {
                window.location.href = '/react_testPro/#/aboutPet' 
                // window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
            } else if (innerText === '登入') {
                window.location.href = '/react_testPro/#/aboutPet/article1' 
                // window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
            }
        }
    }
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-light py-0'>
                <div className='container-fluid'>
                    <div className='p-2 d-flex justify-content-between w-100'>
                        <h1 className='d-flex align-items-center logo'>
                            <a className='navbar-brand fw-bolder' href='/'>GOGO保-寵物險網投專屬平台</a>
                        </h1>
                        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                    </div>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav ms-auto align-items-center'>
                            {
                                navItem.map((item, index) => {
                                    return (
                                        <li className='nav-item w-100' key={index}>
                                            {/* <a className={`nav-link fw-bolder ${props.active === item.linkName ? 'navbar-active' : ''}`} href={item.path}>{item.linkName}</a> */}
                                            <a className={`nav-link fw-bolder ${props.active === item.linkName ? 'navbar-active' : ''}`} href='#' onClick={handleEvent.goToPage}
                                            >{item.linkName}</a>
                                        </li>
                                    )
                                })
                            }
                            {
                                <li className='nav-item w-100'>
                                    <a className={`nav-link fw-bolder ${props.active === '登入' ? 'navbar-active' : ''}`} href='#' onClick={handleEvent.goToPage}>登入</a>
                                </li>

                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='d-table' style={{ height: '55px' }}></div>
        </>
    )
}
export default NavBar