import axios from 'axios'

const weatherService = axios.create({
  baseURL:
    'https://api.seniverse.com/v3/weather/now.json?key=Sis_Q9uKtPZdwXmA3&location=wuxi&language=zh-Hans&unit=c',
  timeout: 5000
})
// 响应拦截器
weatherService.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    console.log(response)
    //   要根据success的成功与否决定下面的操作
    if (success) {
      console.log(data)
      return data
    } else {
      // 业务错误
      return message
    }
  },
  (error) => {
    // 请求超时
    return Promise.reject(error)
  }
)

export default weatherService
