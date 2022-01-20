// 注册模块
import { createStore } from 'vuex'
import user from './modules/user.js'
// 导入getters 在vuex注册
import getters from './getters.js'
import app from './modules/app'
export default createStore({
  getters,
  modules: {
    user,
    app
  }
})
