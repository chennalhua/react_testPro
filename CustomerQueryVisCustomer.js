import React, { useState, useEffect } from "react";
import { Accordion } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';

//components
import Loading from "../../components/Loading";
import { Encrypt, Decrypt } from "../../assets/javascript/AESTool"
import axios from "axios";
import moment from 'moment';
import { useForm } from "react-hook-form";
const VisCustomer = (prop) => {
    let [data, setData] = useState(prop.data)
    //約訪紀錄
    const { reset } = useForm();

    //--查詢
    let [getVisitData, setGetVisitData] = useState([]) //查詢約訪紀錄
    const getVisitFun = () => {
        // setIsLoading(true)
        let getQueryVisitCustomer = {
            cus_id: 'A124228056',
            user_id: 'S223452608',
        }
        console.log(getQueryVisitCustomer)
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
                // setIsLoading(false)
            })
            .catch((err) => {
                setGetVisitData([])
                // setIsLoading(false)
                console.log(err)
            })
    }

    useEffect(() => {
        getVisitFun();
        if (prop.option === '約訪紀錄') {
        }
    }, [prop]);

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
    }, []);
    // }, [cusData]);

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
        let API = `https://eip2.goldennet.com.tw/Golden/magent/insertVisitCustomer`
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
        // setIsLoading(true)
        setBtnLoading(true)
        visitData.visit_code = editCode
        let data = {
            reqEncData: Encrypt(JSON.stringify(visitData), key, iv),
            comp_no: "84200994"
        }
        let API = `https://eip2.goldennet.com.tw/Golden/magent/updateVisitCustomer`
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
                    // setIsLoading(false)
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
        // setIsLoading(true)
        let { dataset } = e.target;
        let delCode = {
            visit_code: dataset.code
        }
        let data = {
            reqEncData: Encrypt(JSON.stringify(delCode), key, iv),
            comp_no: "84200994"
        }
        let API = `https://eip2.goldennet.com.tw/Golden/magent/deleteVisitCustomer`
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
                    // setIsLoading(false)
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
    return (
        <>
            {/* <Loading isLoading={isLoading} /> */}
            <div className={`container`} style={{ background: 'rgba(255,255,255,50%)' }}>
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
        </>
    )
}
export default VisCustomer