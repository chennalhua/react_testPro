import React, { useState } from 'react';
import reviewFile from '../assets/documnet/人身(印簽).pdf'
const Sign = () => {
    return (
        <>
            <div className='container'>
                <h4 className='text-center fw-bolder mt-4'>檢視(簽名)</h4>
                <div className='text-center py-3'>
                    <button className='btn btn-outline-primary fw-bolder me-3' onClick={handleEvent.resetSign}>取消，重簽</button>
                    <button className='btn btn-primary fw-bolder text-light' onClick={handleEvent.checkUpload}>確認，上傳</button>
                </div>
                <div className='iframe-container mb-3'>
                    <iframe src={reviewFile} className='iframe-responsive'></iframe>
                </div>
                {/* <img src={location.state.reviewData.Signatorys[0].PicSign} className='img-fluid'/> */}
            </div>
        </>
    )
}
export default Sign