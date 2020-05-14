import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import authAdmin from'./modules/authAdmin';
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
    menuActive,
    authAdmin
  }
})
