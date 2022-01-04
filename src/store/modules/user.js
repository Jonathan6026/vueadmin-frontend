import { login, getUserInfo } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router/index'
import { setTimeStamp } from '@/utils/auth'
// user.js 模块，用于处理所有和 用户相关 的内容
// 登录请求
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((data) => {
            console.log(data)
            this.commit('user/setToken', data.token)
            // 跳转到layout界面
            router.push('/')
            // 登录成功之后保持登录时间
            setTimeStamp()
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    /*
     **获取用户信息的动作
     */
    async getUserInfo(context, userInfo) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    },
    /*
     **退出登录
     ** 1. 清除用户缓存数据vuex：token & userInfo
     ** 2. 删除本地缓存 用utils/remodeall....
     ** 3. 清理权限相关配置 & 返回根目录
     */
    logout() {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      router.push('/')
    }
  }
}
