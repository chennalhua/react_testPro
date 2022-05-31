import React, { useState } from 'react';
const ClosePage = () => {
    const handleClosePage = () =>{
        let opened = window.open('','_self')
        opened.opener = null
        opened.close();
        console.log('關閉')

        // window.opener = null;
        // window.open('', '_self');
        // window.close();
    }
    const handleClosePage2 = () =>{
        let opened = window.open('about:blank','_self')
        opened.opener = null
        opened.close();
        console.log('關閉')

        // window.opener = null;
        // window.open('', '_self');
        // window.close();
    }
    return (
        <>
            <button className='btn btn-primary' onClick={handleClosePage}>關閉</button>
            <button className='btn btn-primary' onClick={handleClosePage2}>關閉2</button>
        </>
    )
}
export default ClosePage