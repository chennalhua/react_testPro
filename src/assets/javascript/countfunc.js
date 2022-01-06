import axios from "axios"

export default function Countfunc(api,sn){
    let API = `${process.env.REACT_APP_GOLDEN_API5000}Countfunc`
    let params = new URLSearchParams();
        params.append('api', api);
        params.append('sn', Number(sn));
    axios.post(API,params)
    .then((res)=>{
    })
    .catch((err)=>{
        console.log(err)
    })
}