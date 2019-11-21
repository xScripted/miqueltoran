import Vue from 'vue'
import Vuex from 'vuex'

import diet from './modules/storeDiet'
import lang from './modules/storeLang'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {

  },
  actions: {
    
  },
  modules:{
    diet,
    lang
  }
})
