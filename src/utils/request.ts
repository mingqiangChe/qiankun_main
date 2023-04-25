import { rejects } from 'assert';
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const service = axios.create();

// Request interceptors
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        console.log('拦截');

        // do something
        return config;
    },
    (error: any) => {
        Promise.reject(error);
    },
);

// Response interceptors
service.interceptors.response.use(
    // async (response: AxiosResponse) => {
    //   // do something
    //   console.log('响应', response);

    // },
    // (error: any) => {
    //   // do something
    //   return Promise.reject(error);
    // }
    async function (response: AxiosResponse) {
        console.log('响应');

        return response;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default service;
