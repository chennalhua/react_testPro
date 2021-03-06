import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Accordion } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';

//components
// import BackgroundWrapper from "../components/BackgroundWrapper";
import InsideNav from "../InsideNav";
import dataChange from "../assets/javascript/dateChange"
// import Loading from "../components/Loading";
import { Encrypt, Decrypt } from "../assets/javascript/AESTool"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import moment from 'moment';
import { useForm } from "react-hook-form";

import LineLogin from "../assets/javascript/lineLogin";
const CustomerQuery = () => {
    const history = useHistory();
    let code = history.location.pathname.split('/').pop();
    let [isLoading, setIsLoading] = useState(true) //Loading component
    // insideNav component 選單選項
    let insideNavItem = [
        { text: 'tabOne' }, { text: 'tabTwo' }, { text: 'tabThree' }
    ]
    let [option, setOption] = useState(insideNavItem[0].text); //預設為第一個

    const handleClick = (e) => {
        let { innerText, nodeName } = e.target
        if (nodeName !== 'A') {
            return
        }
        setOption(innerText);
    }
    // insideNav component 選單選項 end
    let [cusData, setCusData] = useState({})
    let [insData, setInsData] = useState([])
    let [userId, setUserId] = useState('aaa');

    let filterInsData = [];
    const set = new Set();
    filterInsData = insData.filter(item => !set.has(item.Code) ? set.add(item.Code) : false); //過濾 code 相同的保單

    //約訪紀錄
    const { reset } = useForm();

    //--查詢
    let [getVisitData, setGetVisitData] = useState([]) //查詢約訪紀錄
    const getVisitFun = () => {
        setIsLoading(true)
        let getQueryVisitCustomer = {
            cus_id: 'A124228056',
            user_id: 'S223452608',
            // cus_name: 'Test',
        }
        let API = `https://eip2.goldennet.com.tw/Golden/magent/queryVisitCustomer`
        let data = {
            reqEncData: Encrypt(JSON.stringify(getQueryVisitCustomer), key, iv),
            comp_no: "84200994"
        }
        let postData = new URLSearchParams();
        postData.append('reqEncData', data.reqEncData);
        postData.append('comp_no', data.comp_no);
        axios.post(API, postData, {
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        })
            .then((res) => {
                setGetVisitData(JSON.parse(Decrypt(res.data.resEncData, key, iv)))
                setIsLoading(false)
            })
            .catch((err) => {
                setGetVisitData([])
                setIsLoading(false)
                console.log(err)
            })
    }

    useEffect(() => {
        if (option === 'tabThree') {
            getVisitFun();
        }
    }, [option]);

    //-- 新增
    let [visitData, setVisitData] = useState({})

    useEffect(() => {
        setVisitData({
            cus_id: 'A124228056',
            user_id: 'S223452608',
            cus_name: 'Test',
            // cus_id: cusData.ID,
            // user_id: userId,
            // cus_name: cusData.Name,
            visit_dt: moment().format('YYYY-MM-DDTHH:mm'),
            visit_note: ""
        })
    }, [cusData]);

    //加解密 KEY & IV
    let UAT_Data = 'Vkt6GFYrfxzTqX76xzDuYnzqretMPaxdpT95bb4SuASQfETHrMQFQmq6CdbxKQTZ'
    let key = UAT_Data.substring(0, 32);
    let iv = 'rMQFQmq6CdbxKQTZ';

    let [btnLoading, setBtnLoading] = useState(false)
    let [addShow, setAddShow] = useState(false)

    const handleVisAdd = (e) => {
        setAddShow(true)
    }
    const addCusNote = (e) => {
        setBtnLoading(true)
        e.preventDefault();
        let postData = { ...visitData }
        postData.visit_dt = postData.visit_dt.replace('T', ' ').concat(':00').toString()
        let data = {
            reqEncData: Encrypt(JSON.stringify(postData), key, iv),
            comp_no: "84200994"
        }
        let API = `${process.env.REACT_APP_GOLDEN_MagentAPI}magent/insertVisitCustomer`
        let postAddData = new URLSearchParams();
        postAddData.append('reqEncData', data.reqEncData);
        postAddData.append('comp_no', data.comp_no);
        axios.post(API, postAddData, {
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        })
            .then((res) => {
                if (res.data.responseCode === '99') {
                    alert('新增錯誤!!')
                    setBtnLoading(false)
                } else if (res.data.responseCode === '00') {
                    alert('新增成功!!')
                    setAddShow(false)
                    setBtnLoading(false)
                    getVisitFun();
                    visitData.visit_dt = moment().format('YYYY-MM-DDTHH:mm')
                    reset();
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    //--編輯
    let [show, setShow] = useState(false);
    const handleFunModalClose = (e) => {
        setShow(false)
        setAddShow(false)
    }

    let [editCode, setEditCode] = useState();
    const handleVisEdit = (e) => {
        setShow(true)
        let { dataset } = e.target;
        setEditCode(dataset.code)
        getVisitData.forEach((item, index) => {
            if (item.visit_code === dataset.code) {
                visitData.visit_dt = item.visit_dt
                visitData.visit_note = item.visit_note
            }
        })
    }

    const handleChangeEdit = (e) => {
        setIsLoading(true)
        setBtnLoading(true)
        visitData.visit_code = editCode
        let data = {
            reqEncData: Encrypt(JSON.stringify(visitData), key, iv),
            comp_no: "84200994"
        }
        let API = `${process.env.REACT_APP_GOLDEN_MagentAPI}magent/updateVisitCustomer`
        let postData = new URLSearchParams();
        postData.append('reqEncData', data.reqEncData);
        postData.append('comp_no', data.comp_no);
        axios.post(API, postData, {
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        })
            .then((res) => {
                if (res.data.responseCode === '00') {
                    alert('變更成功!!')
                    setBtnLoading(false)
                    setShow(false)
                    setIsLoading(false)
                    getVisitFun();
                } else if (res.data.responseCode === '99') {
                    alert('變更失敗，發生錯誤!!')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    //--刪除
    const handleVisDel = (e) => {
        setIsLoading(true)
        let { dataset } = e.target;
        let delCode = {
            visit_code: dataset.code
        }
        let data = {
            reqEncData: Encrypt(JSON.stringify(delCode), key, iv),
            comp_no: "84200994"
        }
        let API = `${process.env.REACT_APP_GOLDEN_MagentAPI}magent/deleteVisitCustomer`
        let postData = new URLSearchParams();
        postData.append('reqEncData', data.reqEncData);
        postData.append('comp_no', data.comp_no);
        axios.post(API, postData, {
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        })
            .then((res) => {
                if (res.data.responseCode === '00') {
                    alert('刪除成功!!')
                    setIsLoading(false)
                    getVisitFun();
                } else if (res.data.responseCode === '99') {
                    alert('刪除失敗，發生錯誤!!')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    //約訪紀錄 end

    //重新查詢 start
    const handleSearchReset = (e) => {
        e.preventDefault();
        window.location.href = '/customer_query'; //返回指定頁面
    }
    const SearchReset = {
        bottom: '0',
        width: '100%',
        zIndex: '40'
    }
    //重新查詢 end

    return (
        <>
            {/* <Loading isLoading={isLoading} />
            <BackgroundWrapper> */}
            <div className="position-fixed w-100 bg-light" style={{ zIndex: '30' }}>
                <div className="top-nav w-100 py-3">
                    <p className="text-light text-center fw-bolder">Mobile</p>
                </div>
                <InsideNav insideNavItem={insideNavItem} option={option} handleClick={handleClick}></InsideNav>
            </div>
            <div className="d-table" style={{ height: '130px' }}></div>
            <div className={`container ${option === 'tabOne' ? 'd-block' : 'd-none'}`} style={{ background: 'rgba(255,255,255,50%)' }}>
                <ul className="list-unstyles p-0 pb-4">
                    <li className="row px-2">
                        <div className="col-md-6 d-flex border-bottom py-3">
                            <span className="d-block query-title">身分證/統編</span>
                            <span className="d-block text-dark-blue fw-bolder">{cusData.ID}</span>
                        </div>
                        <div className="col-md-6 d-flex border-bottom py-3">
                            <span className="d-block query-title">姓名/公司名</span>
                            <span className="d-block text-dark-blue fw-bolder">{cusData.Name}</span>
                        </div>
                    </li>
                    <li className="row px-2">
                        <div className="col-md-6 d-flex border-bottom py-3">
                            <span className="d-block query-title">生日/成立日</span>
                            <span className="d-block text-dark-blue fw-bolder">{dataChange(cusData.Birthday)}</span>
                        </div>
                        <div className="col-md-6 d-flex border-bottom py-3">
                            <span className="d-block query-title">性別</span>
                            <span className="d-block text-dark-blue fw-bolder">{cusData.SEX}</span>
                        </div>
                    </li>
                    <li className="row px-2">
                        <div className="col-md-6 d-flex border-bottom py-3">
                            <span className="d-block query-title">婚姻狀況</span>
                            <span className="d-block text-dark-blue fw-bolder">
                                {cusData.Marriage === null || cusData.Marriage == '' ? '' : cusData.Marriage == 1 ? '已婚' : '未婚'}
                            </span>
                        </div>
                        <div className="col-md-6 d-flex border-bottom py-3">
                            <span className="d-block query-title">客戶等級</span>
                            <span className="d-block text-dark-blue fw-bolder">
                                {cusData.CLevel === null || cusData.CLevel == '' ? '' : cusData.CLevel}</span>
                        </div>
                    </li>
                    <li className="row px-2">
                        <div className="col-md-6 d-flex border-bottom py-3">
                            <span className="d-block query-title">通訊地址</span>
                            <span className="d-block text-dark-blue fw-bolder">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span className="ms-2">{cusData.Address === null || cusData.Address == '' ? '' : cusData.Address}</span>
                            </span>
                        </div>
                        <div className="col-md-6 d-flex border-bottom py-3">
                            <span className="d-block query-title">連絡電話</span>
                            <span className="d-block text-dark-blue fw-bolder">
                                <FontAwesomeIcon icon={faCommentDots} />
                                <span className="ms-2">{cusData.TEL === null ? '' : cusData.TEL}</span>
                            </span>
                        </div>
                    </li>
                    <li className="row px-2">
                        <div className="col-md-6 d-flex border-bottom py-3">
                            <span className="d-block query-title">手機號碼</span>
                            <span className="d-block text-dark-blue fw-bolder">
                                <FontAwesomeIcon icon={faCommentDots} />
                                <span className="ms-2">{cusData.Mobile === null ? '' : cusData.Mobile}</span>
                            </span>
                        </div>
                        <div className="col-md-6 d-flex border-bottom py-3">
                            <span className="d-block query-title">Email</span>
                            <span className="ms-2">{cusData.EMail === null ? '' : cusData.EMail}</span>
                        </div>
                    </li>
                    <li className="row px-2">
                        <div className="col-md-6 d-flex border-bottom py-3">
                            <span className="d-block query-title">通訊軟體ID</span>
                            <span className="ms-2">
                                {cusData.SKYPE === null ? '' : cusData.SKYPE}
                            </span>
                        </div>
                        <div className="col-md-6 d-flex border-bottom py-3">
                            <span className="d-block query-title">公司地址</span>
                            <span className="d-block text-dark-blue fw-bolder">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </span>
                            <span className="ms-2">
                                {cusData.Address2 === null ? '' : cusData.Address2}
                            </span>
                        </div>
                    </li>
                    <li className="row px-2">
                        <div className="col-md-6 d-flex border-bottom py-3">
                            <span className="d-block query-title">公司電話</span>
                            <a href="tel:" className="d-block text-dark-blue fw-bolder text-end">
                                <FontAwesomeIcon icon={faCommentDots} />
                                <span className="ms-2">{cusData.CTEL === null ? '' : cusData.CTEL}</span>
                            </a>
                        </div>
                        <div className="col-md-6 d-flex border-bottom py-3">
                            <span className="d-block query-title">傳真號碼</span>
                            <span className="ms-2">{cusData.FAX === null ? '' : cusData.FAX}</span>
                        </div>
                    </li>
                    <li className="row px-2">
                        <div className="col-md-6 d-flex border-bottom py-3">
                            <span className="d-block query-title">備用通訊資料</span>
                            <span className="d-block text-dark-blue fw-bolder">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span className="ms-2">{cusData.Address3 === null ? '' : cusData.Address3}</span>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={`container ${option === 'tabTwo' ? 'd-block' : 'd-none'}`} style={{ background: 'rgba(255,255,255,50%)' }}>
                {
                    filterInsData.map((item, index) => {
                        return (
                            <Link to={`/insurance_policy_read/${item.InsuredCode}/${item.Pro_Name}`} className="col-md-6 col-lg-4 my-3 cursor-pointer d-block" key={index}>
                                <div className="card bg-light card-shadow">
                                    <h6 className="bg-dark-blue px-3 py-2 d-flex flex-wrap justify-content-between align-items-center text-light text-center fw-bolder rounded-top">
                                        <span className="d-block">{item.Supplier_Name}</span>
                                        <span className="d-block">{item.Ins_No}</span>
                                    </h6>
                                    <div className="card-body py-1">
                                        <ul className="list-unstyled">
                                            <li className="row py-2">
                                                <span className="d-block text-golden-brown fw-bolder" style={{ fontSize: '18px' }}>{item.Pro_Name}</span>
                                            </li>
                                            <li className="row py-1">
                                                <span className="d-block col-4 text-dark">要/被保人</span>
                                                <span className="d-block col-8 text-golden-brown fw-bolder">{item.Name}/{item.IName}</span>
                                            </li>
                                            <li className="row py-1">
                                                <span className="d-block col-4 text-dark">生效日</span>
                                                <span className="d-block col-8 text-golden-brown fw-bolder">{dataChange(item.Effe_Date)}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            <div className={`container ${option === 'tabThree' ? 'd-block' : 'd-none'}`} style={{ background: 'rgba(255,255,255,50%)' }}>
                {/* Button trigger modal */}
                <div className="col-md-6 mx-auto">
                    <button type="button" className="btn btn-dark-blue w-100" onClick={handleVisAdd}>
                        新增約訪紀錄
                    </button>
                </div>
                <div className="col-12">
                    <p className={`text-center mt-4 ${getVisitData.length === 0 ? 'd-block' : 'd-none'}`}>無約訪資料</p>
                    <div className="row d-flex flex-wrap">
                        {
                            getVisitData.map((item, index) => {
                                return (
                                    <div className="col-12 col-md-6 col-lg-4 px-2 mt-3">
                                        <div className="bg-gray py-2 px-3" key={index}>
                                            <Accordion className="my-2">
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>
                                                        <div className="row w-100">
                                                            <p className="col-6 fw-bolder text-dark-blue">{item.cus_name}</p>
                                                            <p className="col-6 fw-bolder text-dark-blue">{item.visit_dt}</p>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <ul className="list-unstyles p-0">
                                                            <li className="row px-2">
                                                                <div className="d-flex border-bottom py-3">
                                                                    <span className="d-block query-title">拜訪日期</span>
                                                                    <span className="d-block text-dark-blue fw-bolder">{item.visit_dt}</span>
                                                                </div>
                                                            </li>
                                                            <li className="row px-2">
                                                                <div className="d-flex border-bottom py-3">
                                                                    <span className="d-block query-title">拜訪紀錄</span>
                                                                    <span className={`d-block text-dark-blue fw-bolder`}>{item.visit_note}</span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                            <hr />
                                            <div className="d-flex justify-content-end">
                                                <button className="btn btn-outline-danger me-2" onClick={handleVisDel} data-code={item.visit_code}>刪除</button>
                                                <button className="btn btn-dark-blue" data-code={item.visit_code} onClick={handleVisEdit}>編輯</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="d-table" style={{ height: '60px' }}></div>
            <button type="button" className="btn btn-golden-brown position-fixed py-3" style={SearchReset} onClick={handleSearchReset}>重新查詢</button>
            {/* add modal */}
            <Modal show={addShow} onHide={handleFunModalClose} animation={true}>
                <Modal.Header>
                    <Modal.Title>新增約訪紀錄</Modal.Title>
                    <CloseButton aria-label="Close" onClick={handleFunModalClose} />
                </Modal.Header>
                <Modal.Body className={`pt-0`}>
                    <form>
                        <div className="form-group my-3">
                            <label htmlFor="visitDt">拜訪日期</label>
                            <input type="datetime-local" className="form-control" id="visitDt"
                                value={visitData.visit_dt}
                                onChange={e => setVisitData({ ...visitData, visit_dt: e.target.value })} />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="visitNote">拜訪紀錄</label>
                            <textarea type="text" className="form-control" id="visitNote"
                                onChange={e => setVisitData({ ...visitData, visit_note: e.target.value })}></textarea>
                        </div>
                        <div className="text-end">
                            <button type="button" className="btn  btn-outline-secondary mx-1" data-btn="close" onClick={handleFunModalClose}>關閉</button>
                            <button type="button" className="btn btn-golden-brown mx-1" onClick={addCusNote} disabled={btnLoading ? 'btnLoading' : ''}>
                                <div className={`spinner-border text-light spinner-border--width me-2 ${btnLoading ? 'd-inline-block' : 'd-none'}`} role="status" style={{ width: '1rem', height: '1rem' }}></div>
                                儲存
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
            {/* edit modal */}
            <Modal show={show} onHide={handleFunModalClose} animation={true}>
                <Modal.Header>
                    <Modal.Title>編輯約訪紀錄</Modal.Title>
                    <CloseButton aria-label="Close" onClick={handleFunModalClose} />
                </Modal.Header>
                <Modal.Body className={`pt-0`}>
                    <form>
                        <div className="form-group my-3">
                            <label htmlFor="visit_dt">拜訪日期</label>
                            <p className="fw-bolder text-dark-blue">{visitData.visit_dt}</p>

                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="visit_note">拜訪紀錄</label>
                            <textarea id="visit_note" name="visit_note" type="text" className={`form-control `} value={visitData.visit_note} onChange={e => setVisitData({ ...visitData, visit_note: e.target.value })}></textarea>

                        </div>
                        <div className="text-end">
                            <button type="button" class="btn  btn-outline-secondary mx-1" data-btn="close" onClick={handleFunModalClose}>關閉</button>
                            <button type="button" className="btn btn-golden-brown mx-1" onClick={handleChangeEdit} disabled={btnLoading ? 'btnLoading' : ''}>
                                <div className={`spinner-border text-light spinner-border--width me-2 ${btnLoading ? 'd-inline-block' : 'd-none'}`} role="status" style={{ width: '1rem', height: '1rem' }}></div>
                                儲存
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
            {/* </BackgroundWrapper> */}
        </>
    )
}

export default CustomerQuery