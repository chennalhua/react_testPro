import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet'

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Directory = () => {
    //component
    let [isLoading, setIsLoading] = useState(true);

    //篩選地區
    let [allData, setAllData] = useState([])
    useEffect(() => {
        let locAPI = `${process.env.REACT_APP_GOLDEN_API5000}Gcd/loc=`;
        console.log(locAPI)
        axios.defaults.withCredentials = true;
        axios.get(locAPI)
            .then((res) => {
                if (res.data.ResponseCode == '-1') {
                    console.log('-1')
                    return
                } else {
                    setAllData(res.data)
                    setIsLoading(false)
                }
            })
            .catch((error) => {
                console.log(error);
            });
    });


    let locAry = []; //放置所有從 API DATA 取出的 location
    const getLocation = (data) => {
        data.forEach((item, index) => {
            locAry.push(item.location)
        })
    }
    getLocation(allData)
    let filterLocAry = locAry.filter((item, index, ary) => {
        return ary.indexOf(item) === index
    }) //篩選過濾出重複後的陣列
    //篩選地區 end

    let [location, setLocation] = useState('總公司'); //地區
    let [dept, setDept] = useState('董事長室'); //部門

    //篩選部門
    let depAry = [];
    const getDep = (data) => {
        data.forEach((item, index) => {
            if (location === item.location) {
                depAry.push(item.department)
            }
        })
    }
    getDep(allData);

    let filterDepAry = depAry.filter((item, index, ary) => {
        return ary.indexOf(item) === index
    }) //篩選過濾出重複後的陣列

    //篩選部門 end

    //change location
    const handleLocChange = (e) => {
        let { value } = e.target
        setLocation(value);
        allData.map((item) => {
            if (value === item.location) {
                setDept(item.department)
            }
            return true
        })
    }
    //change location end

    //change department
    const handleDepChange = (e) => {
        let { value } = e.target
        setDept(value);
    }
    //change department end

    return (
        <>
            <Helmet>
                <meta http-equiv="Access-Control-Allow-Origin" content="*" />
            </Helmet>
            <div className="container mt-3">
                <h5>公司通訊 頁面</h5>
                <p>目前環境:{process.env.NODE_ENV}</p>
                <div className="d-flex pb-2">
                    <select className="form-select" value={location} onChange={handleLocChange}>
                        {
                            filterLocAry.map((item, index) => {
                                return <option key={item} value={item}>{item}</option>
                            })
                        }
                    </select>
                    <select className="form-select ms-2" value={dept} onChange={handleDepChange}>
                        {
                            filterDepAry.map((item, index) => {
                                return <option key={item} value={item}>{item}</option>
                            })
                        }
                    </select>
                </div>
                <ul className="list-unstyled page-content-link fw-bolder" value>
                    {
                        allData.map((item, index) => {
                            if (location === item.location && dept === item.department) {
                                return (
                                    <li className="border-bottom py-3" key={index}>
                                        <div className="d-flex justify-content-between flex-wrap">
                                            <span>
                                                <FontAwesomeIcon className="me-2 text-dark-blue" icon={faUser} />
                                                {item.contact}
                                            </span>
                                            <span>
                                                {item.extension === '' ? ' - ' : item.extension} /
                                                <a href={`tel:+886-${item.telephone}`} className="ms-2">{item.telephone}</a>
                                            </span>
                                        </div>
                                    </li>
                                )
                            }
                            return true
                        })
                    }
                </ul>
            </div>
        </>

    );
}
export default Directory;