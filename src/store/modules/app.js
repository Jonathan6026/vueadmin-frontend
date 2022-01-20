// 关于汉堡动画的处理，样式的改变是通过数据进行驱动的，所以先创建对应的数据
export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true
  }),
  mutations: {
    triggerSidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened
    }
  }
}
