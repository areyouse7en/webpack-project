// 登录
const Login = r => require(['@/components/login/index.vue'], r)
// 主页面
const Index = r => require(['@/components/index.vue'], r)

// 路由设置
export default {
  mode: 'history',
  routes: [
    // 登录
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    // 首页
    {
      path: '/',
      component: Index,
      meta: {
        requiresAuth: true
      }
    }
  ]
}