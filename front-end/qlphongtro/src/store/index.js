import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import alert from './modules/alert'
import menuActive from './modules/menu/menu'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    alert,
    menuActive
  }
})
