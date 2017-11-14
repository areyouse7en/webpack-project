const index = () =>
  import ( /* webpackChunkName: "group-login" */ './index.vue')

export default {
  path: '/login',
  title: '登录',
  name: 'login',
  component: index,
  meta: {
    requiresAuth: false
  }
}