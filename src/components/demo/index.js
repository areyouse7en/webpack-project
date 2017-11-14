import mainLayout from '@/components/index.vue'
const children1 = () =>
  import ( /* webpackChunkName: "group-demo" */ './children1/index.vue')
const children2 = () =>
  import ( /* webpackChunkName: "group-demo" */ './children2/index.vue')

export default {
  path: '/demo',
  component: mainLayout,
  meta: {
    requiresAuth: false
  },
  children: [{
    path: 'children1',
    name: 'demoChildren1',
    title: '例子1',
    component: children1
  }, {
    path: 'children2',
    name: 'demoChildren2',
    title: '例子2',
    component: children2
  }]

}