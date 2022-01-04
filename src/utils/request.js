import axios from 'axios'
import { ElMessage } from 'element-plus'
import { isCheckTimeOut } from '@/utils/auth'
import store from '@/store'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    //   要根据success的成功与否决定下面的操作
    if (success) {
      return data
    } else {
      // 业务错误
      ElMessage.error(message) // 提示错误消息
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // 请求超时
    ElMessage.error(error.message) // 提示错误信息
    return Promise.reject(error)
  }
)

// 请求拦截器 作用统一注入token 通过store/getters.js 快速访问token
service.interceptors.request.use(
  (config) => {
    // 在这个位置需要统一的去注入token
    if (store.getters.token) {
      if (isCheckTimeOut()) {
        // 调用isCheckTimeOut，如果超时输出true
        // 退出操作
        store.dispatch('user/logout')
        return Promise.reject(new Error('token 失效'))
      }
      // 如果token存在 注入token
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config
  },
  // 请求失败的处理
  (error) => {
    // token过期
    if (error.response && error.response && error.response.data.code === 401) {
      store.dispatch('user/logout')
    }
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)
export default service
