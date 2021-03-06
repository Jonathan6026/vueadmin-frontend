import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 导入初始化样式
import '@/style/index.scss'
// 导入svgicon
import installIcons from '@/icons'
// 导入路由鉴权 路由守卫
import './permission'

const app = createApp(App)
installElementPlus(app)
installIcons(app)
app.use(store).use(router).mount('#app')
