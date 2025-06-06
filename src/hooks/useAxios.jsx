import axios from "axios";
import useAuth from '../hooks/useAuth'
import { useNavigate } from "react-router-dom";
const axiosSecure = axios.create({ baseURL: 'http://localhost:5000' })
const useAxios = () => {
    const navigate=useNavigate();
    const {logOut}=useAuth()
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        console.log('interceptors', token)
        config.headers.authorization = `bearer ${token}`
        return config
    },
        function (error) {
            // Do something with request error
            return Promise.reject(error);
        })

    //interseptors 401,403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    },
        async(error) => {
            const status=error.response.status
            console.log('status error in the interceptors',status)
            if(status===401||status===403){
                await logOut();
                navigate('/login')
            }
            return Promise.reject(error);
        })


    return axiosSecure;
};

export default useAxios;