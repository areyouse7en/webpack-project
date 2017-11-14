import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 严格模式
const debug = process.env.NODE_ENV !== 'production'

const settings = {
  state: {},
  mutations: {},
  strict: debug
}

const store = new Vuex.Store(settings)

export default store