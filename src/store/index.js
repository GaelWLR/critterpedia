import Vue from 'vue'
import Vuex from 'vuex'
import bugs from './modules/bugs'
import fishes from './modules/fishes'
import fossils from './modules/fossils'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    bugs,
    fishes,
    fossils
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})
