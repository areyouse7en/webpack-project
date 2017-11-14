import mainLayout from '@/components/index.vue'
const index = () =>
  import ( /* webpackChunkName: "group-home" */ './index.vue')

export default {
  path: '/',
  component: mainLayout,
  meta: {
    requiresAuth: false
  },
  children: [{
    path: '',
    name: 'home',
    title: '首页',
    component: index
  }]

}