import Vue from 'vue'

// 配置
Vue.config.productionTip = false

// iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

// 路由
import router from '@/router'

// 实例
import App from './App'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')