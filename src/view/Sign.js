import React, { useState } from 'react';
import reviewFile from '../assets/documnet/人身(印簽).pdf'
const Sign = () => {
    return (
        <>
            <div className="container">
                <div className='iframe-container mb-3'>
                    <iframe src={reviewFile} className='iframe-responsive'></iframe>
                </div>
            </div>
        </>
    )
}
export default Sign