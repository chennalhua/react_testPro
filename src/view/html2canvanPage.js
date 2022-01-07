import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import '../assets/stylesheet/all.scss';

import downloadImg from '../assets/javascript/html2canvasImg';
import moment from 'moment';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

//img url
import rainbowUrl from '../assets/images/happyRetiredLife/rainbow.png'; //彩虹
import bgWallUrl from '../assets/images/happyRetiredLife/bg-wall.png'; //白牆
import logoUrl from '../assets/images/happyRetiredLife/logo.png';
import decorationImg1 from '../assets/images/happyRetiredLife/img1.svg';//菱形
import decorationImg2 from '../assets/images/happyRetiredLife/img2.svg';//米型

// ios15.2 blob 猜測不支援問題，跳轉換不成功 !!
const HappyRetiredLife = () => {
    const bgWall = {//白牆
        backgroundImage: `url(${bgWallUrl})`
    }

    let [date, setDate] = useState(moment().format('YYYY-MM-DD')); //input 填寫日期欄位
    downloadImg();
    const handleDate = (e) => { //input 填寫日期欄位
        setDate(e.target.value)
    }

    let [blob, setBlob] = useState(localStorage.getItem('blob'))
    useEffect(() => {
        setBlob(localStorage.getItem('blob'))
        console.log(localStorage.getItem('blob'))
        // window.location.href = localStorage.getItem('blob')
    }, [blob]);

    const handleClickBlob = () => {
        alert(`正在跳轉 ${localStorage.getItem('blob')}`)
        window.location.href = `https://chennalhua.github.io/react_testPro.jsp?imgurl=${localStorage.getItem('blob')}`
    }

    const bgWapperStyle = {
        /* ios15 文字問題 */
        fontFamily: "Helvetica, Tahoma, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Heiti SC', STXihei, 'Microsoft YaHei',SimHei",
        backgroundImage: `url(${rainbowUrl})` //彩虹
    }
    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" id="viewport" />
            </Helmet>
            <div className="bg-wapper bg-life-light-pink lifebg-fixed-bottom p-3" style={bgWapperStyle} id="downloadJPG">
                <div className="container">
                    <div className="row">
                        <h1 className="text-center fw-bolder title"><span className="text-life-dark-pink">樂退</span><span className="text-life-blue">完美</span>人生</h1>
                        <div className="bg-wall pt-4 pb-2 position-relative" style={bgWall}>
                            <div className="decoration-icon">
                                <img src={decorationImg1} alt="裝飾圖-菱形" />
                                <img src={decorationImg2} alt="裝試圖-米型" />
                            </div>
                            {/* 人生線 */}
                            <div className="col-12 position-relative">
                                <div className="life-line">
                                    <div className="row justify-content-between g-0">
                                        <div className="col-2 position-relative">
                                            <p className="fw-bolder mb-3 text-center dot-box-first life-title">現在的我</p>
                                            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center text-center mt-5">
                                                <span className="d-block">【<input className="form-control w-50 d-inline-block" />】</span>
                                                <p className="">歲</p>
                                            </div>
                                        </div>
                                        <div className="col-2"><p className="text-life-dark-pink fw-bolder mb-3 text-center life-title">辛勤工作</p></div>
                                        <div className="col-2 position-relative">
                                            <p className="fw-bolder mb-3 text-center dot-box life-title">預計退休</p>
                                            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center text-center mt-5">
                                                <span className="d-block">【<input className="form-control w-50 d-inline-block" />】</span>
                                                <p className="">歲</p>
                                            </div>
                                        </div>
                                        <div className="col-2"><p className="text-life-dark-pink fw-bolder mb-3 text-center life-title">退休生活</p></div>
                                        <div className="col-2 position-relative">
                                            <p className="fw-bolder mb-3 text-center dot-box life-title">平均壽命</p>
                                            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center text-center mt-5">
                                                <span className="d-block">【<input className="form-control w-50 d-inline-block" />】</span>
                                                <p className="">歲</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* input checkbox */}
                            <div className="col-12 my-3">
                                <h3>1. 您習慣善用哪些投資理財管道來增加個人財富？</h3>
                                <div className="first-option d-flex flex-wrap">
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="checkbox" id="bankSavings" />
                                        <label className="form-check-label" htmlFor="bankSavings">銀行存款</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="checkbox" id="insurerSavings" />
                                        <label className="form-check-label" htmlFor="insurerSavings">保險儲蓄</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="checkbox" id="stock" />
                                        <label className="form-check-label" htmlFor="stock">股票</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="checkbox" id="fund" />
                                        <label className="form-check-label" htmlFor="fund">基金</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="checkbox" id="propertyAsset" />
                                        <label className="form-check-label" htmlFor="propertyAsset">不動產</label>
                                    </div>
                                    <div className="form-check m-2 d-flex justify-content-around">
                                        <input className="form-check-input" type="checkbox" id="firstOther" />
                                        <label className="form-check-label" htmlFor="firstOther">其他</label>
                                        <input className={`form-control w-80`} type="text" id="firstOther" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 my-3">
                                <h3>2. 請問您退休後最想做哪些事呢？</h3>
                                <div className="secondary-option d-flex flex-wrap">
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="checkbox" name="secondaryOption" id="travelWorld" />
                                        <label className="form-check-label" htmlFor="travelWorld">環遊世界</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="checkbox" name="secondaryOption" id="learn" />
                                        <label className="form-check-label" htmlFor="learn">學習新知</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="checkbox" name="secondaryOption" id="charity" />
                                        <label className="form-check-label" htmlFor="charity">公益活動</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="checkbox" name="secondaryOption" id="secondaryBusiness" />
                                        <label className="form-check-label" htmlFor="secondaryBusiness">發展事業第二春</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="checkbox" name="secondaryOption" id="takeCareKid" />
                                        <label className="form-check-label" htmlFor="takeCareKid">含飴弄孫</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="checkbox" name="secondaryOption" id="helpForChildren" />
                                        <label className="form-check-label" htmlFor="helpForChildren">協助子女成家立業</label>
                                    </div>
                                    <div className="form-check m-2 d-flex justify-content-around">
                                        <input className="form-check-input" type="checkbox" name="secondaryOption" id="Secondaryother" />
                                        <label className="form-check-label" htmlFor="Secondaryother">其他</label>
                                        <input className={`form-control w-80`} type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 my-3">
                                <h3>3. 對於退休生活費的來源，您認為最有保障的退休收入是？</h3>
                                <div className="third-option d-flex flex-wrap">
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="checkbox" name="thirdOption" id="thirdOne" />
                                        <label className="form-check-label" htmlFor="thirdOne">政府的老人年金</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="checkbox" name="thirdOption" id="thirdTwo" />
                                        <label className="form-check-label" htmlFor="thirdTwo">公司的退休金</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="checkbox" name="thirdOption" id="thirdThree" />
                                        <label className="form-check-label" htmlFor="thirdThree">子女的奉養</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="checkbox" name="thirdOption" id="thirdFour" />
                                        <label className="form-check-label" htmlFor="thirdFour">自己規劃的退休金</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 my-3">
                                <h3>4. 您認為多少退休金能夠讓您安心退休呢？</h3>
                                <div className="four-option d-flex flex-wrap">
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="radio" name="fourOption" id="500" />
                                        <label className="form-check-label" htmlFor="500">500 萬元</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="radio" name="fourOption" id="1000" />
                                        <label className="form-check-label" htmlFor="1000">1,000 萬元</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="radio" name="fourOption" id="1200" />
                                        <label className="form-check-label" htmlFor="1200">1,200 萬元</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="radio" name="fourOption" id="2000" />
                                        <label className="form-check-label" htmlFor="2000">2,000 萬元以上</label>
                                    </div>
                                    <div className="form-check m-2 d-flex justify-content-around">
                                        <input className="form-check-input" type="radio" name="fourOption" id="fourOther" />
                                        <label className="form-check-label" htmlFor="fourOther">其他</label>
                                        <input className={`form-control w-80 `} type="text" id="fourOther" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 my-3">
                                <h3>5. 您希望退休後每個月的生活費用是多少？</h3>
                                <div className="five-option d-flex flex-wrap">
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="radio" name="fiveOption" id="2" />
                                        <label className="form-check-label" htmlFor="2">2 萬元</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="radio" name="fiveOption" id="3" />
                                        <label className="form-check-label" htmlFor="3">3 萬元</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="radio" name="fiveOption" id="4" />
                                        <label className="form-check-label" htmlFor="4">4 萬元</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="radio" name="fiveOption" id="5" />
                                        <label className="form-check-label" htmlFor="5">5 萬元以上</label>
                                    </div>
                                    <div className="form-check m-2 d-flex justify-content-around">
                                        <input className="form-check-input" type="radio" name="fiveOption" id="fiveOther" />
                                        <label className="form-check-label" htmlFor="fiveOther">其他</label>
                                        <input className={`form-control w-80 `} type="text" id="fiveOther" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 my-3">
                                <h3>6. 您想了解的投資理財資訊有哪些？</h3>
                                <div className="six-option d-flex flex-wrap">
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="checkbox" name="sixOption" id="sixOne" />
                                        <label className="form-check-label" htmlFor="sixOne">個人儲蓄投資理財</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="checkbox" name="sixOption" id="sixTwo" />
                                        <label className="form-check-label" htmlFor="sixTwo">節稅資訊</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="checkbox" name="sixOption" id="sixThree" />
                                        <label className="form-check-label" htmlFor="sixThree">退休理財生活費規劃</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="checkbox" name="sixOption" id="sixFour" />
                                        <label className="form-check-label" htmlFor="sixFour">房貸理財提前清償計畫</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="checkbox" name="sixOption" id="sixSix" />
                                        <label className="form-check-label" htmlFor="sixSix">子女教育基金準備</label>
                                    </div>
                                    <div className="form-check m-2 d-flex justify-content-around">
                                        <input className="form-check-input" type="checkbox" name="sixOption" id="sixOther" />
                                        <label className="form-check-label" htmlFor="sixOther">其他</label>
                                        <input className={`form-control w-80 `} type="text" id="sixOther" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 my-3">
                                <h3>7. 依您目前的經濟能力，每月可提撥多少預算規劃儲蓄與投資?</h3>
                                <div className="steven-option d-flex flex-wrap">
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="radio" name="stevenOption" id="stevenOne" />
                                        <label className="form-check-label" htmlFor="stevenOne">5,000 元</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="radio" name="stevenOption" id="stevenTwo" />
                                        <label className="form-check-label" htmlFor="stevenTwo">10,000 元</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="radio" name="stevenOption" id="stevenThree" />
                                        <label className="form-check-label" htmlFor="stevenThree">20,000 元</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="radio" name="stevenOption" id="stevenFour" />
                                        <label className="form-check-label" htmlFor="stevenFour">30,000 元</label>
                                    </div>
                                    <div className="form-check m-2">
                                        <input className="form-check-input" type="radio" name="stevenOption" id="stevenFive" />
                                        <label className="form-check-label" htmlFor="stevenFive">50,000 元以上</label>
                                    </div>
                                </div>
                            </div>
                            {/* download button */}
                            <div className="col-12 mb-2 text-center row px-md-5">
                                <div className="my-3 col-md-6">
                                    <label htmlFor="name" className="text-life-blue fw-bolder">您的姓名：</label>
                                    <input className="form-control d-inline-block name" />
                                </div>
                                <div className="my-3 col-md-6">
                                    <label htmlFor="date" className="text-life-blue fw-bolder">填寫日期：</label>
                                    <input type="date" className="form-control d-inline-block date" value={date} onChange={handleDate} />
                                </div>
                                <p>測 6</p>
                                <p>{blob}</p>
                                <button className="btn text-life-blue d-inline" id="save-local">
                                    <FontAwesomeIcon className="fs-5" icon={faDownload}></FontAwesomeIcon>
                                </button>
                                <button className="btn" onClick={handleClickBlob}>blob href</button>
                            </div>
                        </div>
                        {/* logo */}
                        <footer className="text-center position-relative mt-2">
                            <img src={logoUrl} className="img-fluid " alt="golden-logo" width="150" />
                            <small className="text-light golden-num">公勝(核)2021090001號</small>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HappyRetiredLife;
