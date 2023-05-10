import { rejects } from 'assert';
import axios, {
    AxiosResponse,
    InternalAxiosRequestConfig,
    AxiosRequestConfig,
} from 'axios';

const service = axios.create();

/**
 * 默认配置
 */
export const defaultConfig: AxiosRequestConfig = {
    baseURL: '',
    timeout: 10000, // 10秒超时
    headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
};
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
