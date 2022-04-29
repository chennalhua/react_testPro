import React, { useState } from 'react';
const DomainShareLocalStrong = () => {
    window.onmessage = function (event) {
        console.log(event)
        if (event.origin !== 'https://chennalhua.github.io') {
            console.log('xx')
            return;
        }
        // var payload = JSON.parse(event.data);
        // localStorage.setItem(payload.key, JSON.stringify(payload.data));
    };

    /*
    Uncaught SyntaxError: Unexpected token o in JSON at position 1
    at JSON.parse (<anonymous>)
    at DomainShareLocalStrong.window.onmessage
    */

    //Failed to execute 'postMessage' on 'DOMWindow': The target origin provided ('http://localhost:4500') does not match the recipient window's origin
    return (
        <>
            <p>接收方</p>
        </>
    )
}
export default DomainShareLocalStrong