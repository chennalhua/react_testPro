import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet'

//from
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import randomBytes from "randombytes"

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { default as swal } from 'sweetalert2'


import axios from 'axios';
import url from 'url';
import qs from 'qs';
import jwt from 'jsonwebtoken';

const Login = () => {
    let [lineId, setLineId] = useState('');
    const state = randomBytes(32).toString('hex');
    const nonce = randomBytes(32).toString('hex');

    const lineLogin = () => {
        let link = 'https://access.line.me/oauth2/v2.1/authorize?';
        link += 'response_type=code';
        link += `&client_id=${process.env.REACT_APP_LINE_LOGIN_CHANNEL_ID_TEST}`;
        link += `&redirect_uri=${process.env.REACT_APP_LINE_LOGIN_CALLBACK_URL_TEST}`;
        link += `&state=${state}`;
        link += `&nonce=${nonce}`;
        link += '&scope=openid%20profile';
        link += '&prompt=consent';
        link += '&bot_prompt=normal';
        // link += `&max_age=241000`; 登入後的有效時間
        window.location.href = link;
    };
    useEffect(() => {
        var urlParts = url.parse(window.location.href, true);
        var query = urlParts.query;
        const isLogin = () => {
            if (Object.keys(query).length === 0) {
                lineLogin();
            }
        }
        isLogin()
    });

    const getAccessToken = (callbackURL) => {
        var urlParts = url.parse(callbackURL, true);
        var query = urlParts.query;
        var hasCodeProperty = Object.prototype.hasOwnProperty.call(query, 'code');
        if (hasCodeProperty) {
            const reqBody = {
                grant_type: 'authorization_code',
                code: query.code,
                redirect_uri: `${process.env.REACT_APP_LINE_LOGIN_CALLBACK_URL_TEST}`,
                client_id: `${process.env.REACT_APP_LINE_LOGIN_CHANNEL_ID_TEST}`,
                client_secret: `${process.env.REACT_APP_LINE_LOGIN_CHANNEL_SECRET_TEST}`
            };
            const reqConfig = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            axios
                .post(
                    'https://api.line.me/oauth2/v2.1/token',
                    qs.stringify(reqBody),
                    reqConfig
                )
                .then((res) => {
                    try {
                        const decodedIdToken = jwt.verify(res.data.id_token, `${process.env.REACT_APP_LINE_LOGIN_CHANNEL_SECRET_TEST}`, {
                            algorithms: ['HS256'],
                            audience: `${process.env.REACT_APP_LINE_LOGIN_CHANNEL_ID_TEST}`.toString(),
                            issuer: 'https://access.line.me',
                            // nonce: `${newId}`
                        });
                        setLineId(decodedIdToken.sub)
                        lineCanLogin(decodedIdToken.sub);

                        // if (setIdToken) setIdToken(decodedIdToken);
                    } catch (err) {
                        // If token is invalid.
                        console.log(err);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if (query.error) {
            swal.fire({
                icon: 'error',
                title: '登入失敗 ><',
                text: '需「許可」授權，才能驗證登入',
                confirmButtonText: '重新登入',
            }).then(function () {
                lineLogin()
            })
        }
    };
    useEffect(() => {
        getAccessToken(window.location.href)
    });

    const validationSchema = Yup.object().shape({
        uid: Yup.string()
            .required('請正確輸入帳號'),
        // .email('Email is invalid'),
        pwd: Yup.string()
            // .min(6, 'Password must be at least 6 characters')
            .required('請正確輸入密碼'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    let [loadingBtn] = useState(false)

    //判斷 line 登入權限
    const lineCanLogin = (id) => {
        let params = new URLSearchParams();
        params.append('lineid', 'Ufb5a74fdae4e3fb897371a8ac2f55dde');

        let API = `${process.env.REACT_APP_GOLDEN_API5000}LineLogin`
        axios.defaults.withCredentials = true;
        axios.post(API, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then((res) => {
                if (res.data.ResponseCode === '-2') {
                    // window.location.href = '/lineid_blocked'
                    alert('離職 ing')
                } else if (res.data.ResponseCode === '-3') {
                    swal.fire({
                        icon: 'info',
                        title: '不在使用權限內',
                        text: '請進行業管系《帳號、密碼》登入驗證',
                        confirmButtonText: '好的',
                    })
                } else {
                    alert('可使用')
                    // window.location.href = '/use_ismart_plus'
                    // window.close();
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const onSubmit = (data) => {
        setEye(true);
        let salesLoginData = new URLSearchParams();
        salesLoginData.append('lineid', lineId);
        salesLoginData.append('uid', data.uid);
        salesLoginData.append('pwd', data.pwd);

        let API = `${process.env.REACT_APP_GOLDEN_API5000}SalesLogin`
        axios.post(API, salesLoginData)
            .then((res) => {
                console.log(res)
                if (res.data.ResponseCode === '0') {
                    swal.fire({
                        icon: 'success',
                        title: '!!驗證成功!!',
                        text: '歡迎使用 iSmart +',
                        confirmButtonText: '關閉',
                    })
                    reset();
                } else if (res.data.ResponseCode === '-4') {
                    swal.fire({
                        icon: 'info',
                        title: '此帳號不存在 ><',
                        text: '請確認帳號是否輸入正確',
                        confirmButtonText: '關閉',
                    })
                } else if (res.data.ResponseCode === '-5') {
                    swal.fire({
                        icon: 'error',
                        title: '密碼錯誤 ><',
                        text: '請確認帳號密碼是否輸入正確',
                        confirmButtonText: '關閉',
                    })
                }
            })
            .catch((err) => {
                console.log(err)
                reset();
            })
    }
    //密碼眼睛
    let [eye, setEye] = useState(true);
    const handleEyeClick = () => {
        if (eye) {
            setEye(false);
        } else {
            setEye(true);
        }
    }
    return (
        <>
            <Helmet>
                <meta http-equiv="Access-Control-Allow-Origin" content="*" />
            </Helmet>
            <div>

                <div className="container-fluid bg-mask vh-100">
                    <div className="container">

                        {/* <h4 className="text-center fw-bolder text-golden-brown">iSmart 登入</h4> */}
                        <div className="d-flex justify-content-center">
                            <form onSubmit={handleSubmit(onSubmit)} className="col-12 col-md-6 col-lg-4">
                                <div className="form-group my-3">
                                    <label htmlFor="uid" className="fw-bolder text-golden-brown">請輸入《業管系統》帳號</label>
                                    <input id="uid" name="uid" type="text" {...register('uid')} className={`form-control ${errors.uid ? 'is-invalid' : ''}`}
                                    />
                                    <div className="invalid-feedback">{errors.uid?.message}</div>
                                </div>
                                <div className="form-group my-3 position-relative">
                                    <label htmlFor="pwd" className="fw-bolder text-golden-brown">請輸入《業管系統》密碼</label>
                                    <input id="pwd" name="pwd" type={eye ? 'password' : 'text'} className={`form-control ${errors.pwd ? 'is-invalid' : ''}`}
                                        {...register('pwd')}
                                    />
                                    <div className="invalid-feedback">{errors.pwd?.message}</div>
                                    <button type="button" className="btn text-dark-blue position-absolute" style={{ right: '-1px', top: '24px' }} onClick={handleEyeClick}><FontAwesomeIcon icon={eye ? faEye : faEyeSlash} /></button>
                                </div>
                                <button type="submit" className="btn btn-golden-brown w-100 mt-3" disabled={loadingBtn ? 'disabled' : ''}>
                                    <div className={`spinner-border text-light spinner-border--width mx-2 ${loadingBtn ? 'd-inline-block' : 'd-none'}`} style={{ width: '1rem', height: '1rem' }} role="status" ></div>
                                    登入
                                </button>
                                {/* <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login