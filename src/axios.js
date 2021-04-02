import axios from 'axios'
const instance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization']='AUTH TOKEN from Axios INSTANCE';

instance.interceptors.request.use(request=>{
    // console.log(request,'\nprinted from instance intercepter');
    return request;
},error=>{
    // console.log(error);
    return Promise.reject(error)
})
export default instance;