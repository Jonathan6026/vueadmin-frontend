import router from './router'
import store from './store'

// 鉴权解决方案是使用路由守卫
// 白名单
const whiteList = ['/login']
/**
 * 路由前置守卫
 */
router.beforeEach(async (to, from, next) => {
  // 1.如果已登录，不允许进入login
  // 存在 token ，进入主页
  // if (store.state.user.token) {
  // 快捷访问
  console.log(store.getters.token)
  if (store.getters.token) {
    if (to.path === '/login') {
      // 如果已经有token还要进入login会跳转到next
      next('/')
    } else {
      // 判断用户资料是否获取
      // 若不存在用户信息，则需要获取用户信息
      //   if (!store.getters.hasUserInfo) {
      //     // 触发获取用户信息的 action
      //     await store.dispatch('user/getUserInfo')
      //   }

      next()
    }
  } else {
    // 没有token的情况下，可以进入白名单
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
