import axios from "axios";

export default function LineLogin(str) {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)iSmartToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (!token) {
        localStorage.setItem('page',str)
        // 跳轉回 login 頁面
        window.location.href = '/login'
    } else {
        // 將 token 加到 headers 表頭裡
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
}