import Vue from 'vue'

// 关掉启动时的提示
Vue.config.productionTip = false

/*****插件*****/
// http请求
import axios from 'axios'
import store2 from 'store2'
import httpPlugin from 'qf-vue-axios'
const httpOpts = {
  baseURL: '/api',
  before(config) {
    // 缓存的userToken
    // const {
    //   access_token
    // } = store2('userToken') || {}
    // config.headers['Authorization'] = access_token
    // return config
  },
  after(res) {
    // 如果http状态码正常，则直接返回数据
    if (res.status >= 200 && res.status < 400) {
      if (res.data.code == 203) {
        console.warn('登录超时')
      }
      return res.data
    } else {
      // 异常状态
      return {
        code: -404,
        success: false,
        msg: '网络错误'
      }
    }
  }
}
Vue.use(httpPlugin, axios, httpOpts)
/*****插件*****/

/*****组件*****/
/*****组件*****/

// 实例化
import router from '@/router'

import App from './App'
import '@/assets/scss/app.scss'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')