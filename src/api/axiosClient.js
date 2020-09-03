import axios from 'axios';
import queryString from 'query-string'

const axiosClient=axios.create({
    baseURL:'http://localhost:8080/api',
    headers:{
        'content-type':"application/json",
    },
    paramsSerializer:(params)=>queryString.stringify(params),
});

axiosClient.interceptors.request.use(async(config)=>{
    //TODO: Handler Token
    return config;
});

axiosClient.interceptors.response.use((response)=>{
    if(response&& response.data){
        return response.data;
    }else{
        return response;
    }
},(err)=>{
    throw err;
})

export default axiosClient;