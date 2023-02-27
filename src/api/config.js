import axios from "axios";
const instance = axios.create({
    baseURL: " http://localhost:3000",
})

instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
})
instance.interceptors.response.use(function (data) {
    return data;
}, function (error) {
    return Promise.reject(error);
})
export default instance;