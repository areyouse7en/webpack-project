import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import config from './config'

const router = new VueRouter(config)

// 初始化登录状态
window.loggedIn = false

// 判断登录状态
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!loggedIn) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router