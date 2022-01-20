import request from '@/utils/request'
import weatherService from './weatherApi'
/**
 * 登录
 */
export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return request({
    url: '/sys/profile'
  })
}

/**
 * 获取天气信息
 */
export const getWeather = (data) => {
  return weatherService({
    method: 'GET',
    data
  })
}
