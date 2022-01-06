import moment from 'moment';

export default  function dateChange(day){
    let dayDay = Date.parse(day)
    return moment(dayDay).format('YYYY-MM-DD')
}