import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
//components
import BackgroundWrapper from "../../components/BackgroundWrapper";
import Loading from '../../components/Loading'

import dataChange from "../../assets/javascript/dateChange"
import LineLogin from '../../assets/javascript/lineLogin'
import Countfunc from '../../assets/javascript/countfunc'

const CustomerQuery = () => {
    let match = useRouteMatch();
    let [isLoading, setIsLoading] = useState(true)
    let [searchInput, setSearchInput] = useState('')

    let [data, setData] = useState([])
    useEffect(() => {
        LineLogin('/customer_query'); //LINE 登入狀態驗證
        Countfunc('客戶查詢', 18)
        let API = `${process.env.REACT_APP_GOLDEN_API5000}CusList`;
        // axios.default.withCredentials = true;
        axios.get(API, {
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Credentials': 'true'
            }
        })
            .then((res) => {
                if (res.data.ResponseCode === '-1') {
                    localStorage.setItem('page', '/customer_query');
                    window.location.href = '/login'
                    return
                } else if (res.data.ResponseCode === '0') {
                    setData(res.data.Data)
                    setIsLoading(false)
                } else {
                    alert('查詢失敗，請聯繫管理人員')
                    setIsLoading(false)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    let [dropDown, setDropDown] = useState(false)
    const handleDropDown = () => {
        if (dropDown) {
            setDropDown(false)
        } else {
            setDropDown(true)
        }
    }

    let [filterData, setFilterData] = useState([]);
    //搜尋
    const searchDoneData = () => {
        data.forEach((val, index) => {
            if (searchInput === '') {
                setFilterData(old => [...old, val])
            } else if (val.Name.includes(searchInput) || val.ID.includes(searchInput)) {
                setFilterData(old => [...old, val])
            }
        })
    }
    let testData = [];
    const set = new Set();
    testData = filterData.filter(item => !set.has(item.Code) ? set.add(item.Code) : false); //過濾 Line ID 相同的人員

    useEffect(() => {
        searchDoneData()
    }, [searchInput, data]);
    //分頁邏輯 start
    //分頁初始資料
    let [currentPage, setCurrentPage] = useState(1); //當前頁數
    let [itemsPerPage] = useState(5); //預設一頁顯示筆數
    let [pageNumberLimit] = useState(5); //每次顯示頁數限制
    let [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5) //最大頁數限制
    let [minPageNumberLimit, setMinPageNumberLimit] = useState(0) //最小頁數限制

    const handleCurrentPage = (e) => {
        e.preventDefault();
        let { id } = e.target;
        setCurrentPage(Number(id))
    }

    let pages = []; //總共分成幾頁
    for (let i = 1; i <= Math.ceil(testData.length / itemsPerPage); i++) {
        pages.push(i);
    }

    //預設 currentPage 為 1; itemsPerPage 為 5筆
    const indexOfLastItem = currentPage * itemsPerPage; //5
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; //0
    const currentItems = testData.slice(indexOfFirstItem, indexOfLastItem); // MAP 的資料
    const renderPageNumbers = pages.map((item) => {
        if (item < maxPageNumberLimit + 1 && item > minPageNumberLimit) {
            return (
                <li className={`page-item`} key={item} id={item} onClick={handleCurrentPage}>
                    <a href="#" className={`page-link ${currentPage === item ? "page-active" : ""}`} id={item}>{item}</a>
                </li>
            )
        } else {
            return null
        }
    })

    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    }
    const handlePretBtn = () => {
        setCurrentPage(currentPage - 1);
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    }

    let pageAddBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageAddBtn = <li className={`page-item`} >
            <a href="#" className={`page-link px-2`} onClick={handleNextBtn}>&hellip;</a>
        </li>
    }
    let pageReduceBtn = null;
    if (minPageNumberLimit >= 1) {
        pageReduceBtn = <li className={`page-item`} >
            <a href="#" className={`page-link px-2`} onClick={handlePretBtn}>&hellip;</a>
        </li>
    }
    //分頁邏輯 end

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value.replace(/\s+/g, ""))
        setFilterData([])
        setCurrentPage(1)
    }

    useEffect(() => {
    }, [currentPage]);
    return (
        <>
            <Loading isLoading={isLoading} />
            <BackgroundWrapper>
                <div className="position-fixed w-100 bg-light" style={{ zIndex: '30' }}>
                    <div className={`top-nav w-100 py-3`}>
                        <button className="btn w-100 p-0" onClick={handleDropDown}>
                            <p className="text-light text-center fw-bolder">客戶查詢</p>
                            <span className={` position-absolute ${dropDown ? 'times-icon' : 'search-icon'}`} style={{ right: '23px', top: '16px' }}></span>
                        </button>
                        <div className={`container pt-3 ${dropDown ? 'd-block' : 'd-none'}`}>
                            <div className="search-box">
                                <p className="text-light">＊提供客戶姓名、身分證號查詢</p>
                                <input type="text" className="form-control my-3" onChange={handleSearchInput} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-table" style={dropDown ? { height: '180px' } : { height: '60px' }}></div>
                <div className="container">
                    <div className="row">
                        {
                            currentItems.map((item, index) => {
                                return (
                                    <a href={`customer_query_read/${item.Code}`} key={item.Code} className="col-md-6 col-lg-4 my-2 cursor-pointer text-dark">
                                        <div className="card bg-light card-shadow">
                                            <h6 className="bg-dark-blue px-3 py-2 d-flex flex-wrap justify-content-between align-items-center text-light text-center fw-bolder rounded-top" data-id={item.Code}>
                                                <span className="d-block">{item.Name}</span>
                                                {/* <span className="d-block">公司名</span> */}
                                            </h6>
                                            <div className="card-body py-1">
                                                <ul className="list-unstyled">
                                                    <li className="row py-1">
                                                        <span className="d-block col-5">生日/成立日</span>
                                                        <span className="d-block col-7 text-golden-brown fw-bolder">{dataChange(item.Birthday)}</span>
                                                    </li>
                                                    <li className={`row py-1`}>
                                                        <span className="d-block col-5">連絡電話</span>
                                                        <span className="d-block col-7 text-golden-brown fw-bolder">{item.Mobile}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="py-3">
                    <nav aria-label="Page navigation">
                        <ul className="pagination justify-content-center">
                            <li className={`page-item`} >
                                <a href="#" className={`page-link ${currentPage === pages[0] ? "page-disabled d-none" : ""}`} onClick={handlePretBtn}><FontAwesomeIcon icon={faChevronLeft} /></a>
                            </li>
                            {pageReduceBtn}
                            {renderPageNumbers}
                            {pageAddBtn}
                            <li className={`page-item`} >
                                <a href="#" className={`page-link ${currentPage === pages[pages.length - 1] ? "page-disabled d-none" : ""}`} onClick={handleNextBtn}><FontAwesomeIcon icon={faChevronRight} /></a>
                            </li>
                        </ul>
                        {/* <div className="d-flex justify-content-center my-3">
                            <button type="button" className={`btn btn-outline-dark-blue text-center ${currentItems.length < 10 || currentItems.length == resultData.length ? 'd-none' : 'd-block'}`} onClick={handleLoadMore}>一次瀏覽更多</button>
                        </div> */}
                    </nav>
                </div>
            </BackgroundWrapper>
        </>
    )
}

export default CustomerQuery