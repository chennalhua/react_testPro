import axios from 'axios';
import React, { useState } from 'react';
const pdf = () => {
    const download = (e) => {
        e.preventDefault();
        let API = 'https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf'
        axios.get(API, { responseType: 'blob' })
            .then((res) => {
                const blob = new Blob([res.data], {
                    type: 'application/octet-stream'
                })
                let link = document.createElement('a')
                let body = document.querySelector('body')
                link.href = window.URL.createObjectURL(blob)

                link.download = `AAA.pdf`

                link.style.display = 'none'
                body.appendChild(link)
                link.click()
                body.removeChild(link)
                window.URL.revokeObjectURL(link.href)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <>
            <button className='btn btn-light' onClick={download}>download</button>
            <p>aaa</p>
        </>
    )
}
export default pdf