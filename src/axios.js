import axios from "axios";

// const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
const api=axios.create({
    baseURL:`http://149.100.158.155:8080/api/v1`,
})
// interceptors are special functions that will be executed before request is sent or after response is recieved
// use take 2 params
// 1-onfulfilled =>
// 2-onrejected =>

api.interceptors.request.use((config)=>{

    // const token=localStorage.getItem("ACCESS_TOKEN");

    // config.headers.Authorization=`Bearer ${token}`


    return config;
})


api.interceptors.response.use((response)=>{

    return response;

},(error)=>{

    // destructoring
    const {response} = error;

    // user not authorize (token dosent exist)

    // if(response.status==401)
    // {
    //     localStorage.removeItem("ACCESS_TOKEN");
    // }
    throw error;
})

export default api;