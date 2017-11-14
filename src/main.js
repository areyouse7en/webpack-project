import Vue from 'vue'

// 配置
Vue.config.productionTip = false

/*****框架*****/
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)
/*****框架*****/

/*****插件*****/
// http请求
import axios from 'axios'
import httpPlugin from 'qf-vue-axios'
import httpOpts from '@/http'
Vue.use(httpPlugin, axios, httpOpts)

// 移动dom
// import DomPortal from 'vue-dom-portal'
// Vue.use(DomPortal)
/*****插件*****/

/*****组件*****/
// 侧滑菜单
// import slider from '@/components/layout/slider'
// Vue.component('Slider', slider)
/*****组件*****/


// 路由
import router from '@/router'
// 状态
import store from '@/store'

// 实例
import App from './App'
import '@/assets/scss/app.scss'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')