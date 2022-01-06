import moment from 'moment';

//數字逗號轉換
export function toCurrency(num) {
    if (num === undefined || num === null) {
        return
    } else {
        const parts = num.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    }
}

//百分比計算
/* Math.round() 四捨五入 / Math.ceil() 無條件進位 / Math.floor() 無條件捨去 */
//(num/num*10000)/100
export function percentCal(num, num2) {
    return Math.round((Number(Math.round(num)) / Number(Math.round(num2)) * 10000) / 100)
}

export function dateChange(day) {
    let dayDay = Date.parse(day)
    return moment(dayDay).format('YYYY-MM-DD')
}

export function dateTimeChange(day) {
    let dayDay = Date.parse(day)
    if (moment(dayDay).format('a') === 'pm') {
        return moment(dayDay).format('YYYY-MM-DD / 下午 h:mm')
    } else {
        return moment(dayDay).format('YYYY-MM-DD / 上午 h:mm')
    }
}