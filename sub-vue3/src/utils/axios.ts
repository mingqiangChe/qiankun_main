import { InjectionKey } from 'vue'
import axios, { InternalAxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosError } from 'axios'


// 定义接口类型
interface ResponseData<T> {
  code: number
  message: string
  data: T
}
// 创建自定义Axios实例
const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost',
  timeout: 5000,
})



// 自定义请求拦截器
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在请求发送前做一些处理
    return config
  },
  (error: AxiosError) => {
    // 处理请求错误
    return Promise.reject(error)
  }
)

// 自定义响应拦截器
api.interceptors.response.use(
  (response: AxiosResponse<ResponseData<any>>) => {
    // 在响应中提取数据并返回
    const res = response.data
    if (res.code === 0) {
      return res.data
    } else {
      return Promise.reject(new Error(res.message || 'Error'))
    }
  },
  (error: AxiosError) => {
    // 处理响应错误
    return Promise.reject(error)
  }
)
// 定义注入键值
export const apiServiceKey: InjectionKey<AxiosInstance> = Symbol('apiService')

// 导出自定义Axios实例
export default api



