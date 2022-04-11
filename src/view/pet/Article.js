import React from 'react';
import { Helmet } from 'react-helmet'; //檔頭 <HEAD>

import ArticleData from './article.json' //文章內容
const Article = () => {
    const handleGoToPage = (e) => { //前往對應文章 PAGE
        let { dataset } = e.target
        window.location.href = `/#/aboutPet/article${dataset.link}` //連結網址
    }

    return (
        <>
            <Helmet>
                <title>GOGO保-寵物險網投專屬平台|知識大全</title>
            </Helmet>
            <div className='article position-relative'>
                {/* <img src={require('../assets/images/img/article-banner.png')} className='article-banner' alt='寵物險知識大全 banner' /> */}
                {/* <h2 className='fw-bolder position-absolute fs-1 text-center lh-base article-banner-title'>寵物險<br />知識大全</h2> */}
            </div>
            <div className='container px-0 article-row'>
                <div className='row'>
                    <div className='col-12 p-4'>
                        <div className='row g-0'>
                            {
                                ArticleData.data.map((item, index) => {
                                    return (
                                        <>
                                            <div className='col-12 col-md-6 col-lg-4 my-1' data-link={item.id}>
                                                <div className='card my-4 mx-3 border-0' onClick={handleGoToPage} data-link={item.id}>
                                                    <div className='card-img position-relative' data-link={item.id}>
                                                        <img src={require(`./article/寵物險NO.${item.id}_S.jpg`).default} className='card-img-top img-fluid' alt={item.title} data-link={item.id} />
                                                    </div>
                                                    <h2 className='text-secondary fw-bolder py-2 article-row-title' data-link={item.id}>{item.title}</h2>
                                                    {/* <div className='card-body p-0 mt-2 mb-3'></div> */}
                                                    <div className='card-footer article-row-briefly' data-link={item.id}>
                                                        <p data-link={item.id}>{item.des}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Article