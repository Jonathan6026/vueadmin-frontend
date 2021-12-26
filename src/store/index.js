import { createStore } from 'vuex'
import user from './modules/user.js'
// 导入getters 在vuex注册
import getters from './getters.js'
export default createStore({
  getters,
  modules: {
    user
  }
})
