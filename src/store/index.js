import Vue from 'vue'
import Vuex from 'vuex'
import { resources } from '../plugins/axios'
import Bug from '../models/Bug'
import fishes from './modules/fishes'
import Fossil from '../models/Fossil'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    fishes
  },
  state: {
    bugs: {
      data: [],
      sortingOptions: [],
      filters: [],
      loaded: false
    },
    fossils: {
      data: [],
      sortingOptions: [],
      filters: [],
      loaded: false
    }
  },
  getters: {
    bugs: state => state.bugs.data,
    fossils: state => state.fossils.data
  },
  mutations: {
    /**
     * @param {Object} state
     * @param {Array} bugs
     */
    SET_BUGS(state, bugs) {
      state.bugs.data = bugs
      state.bugs.loaded = true
    },
    /**
     * @param {Object} state
     * @param {Array} fossils
     */
    SET_FOSSILS(state, fossils) {
      state.fossils.data = fossils
      state.fossils.loaded = true
    }
  },
  actions: {
    /**
     * Get bugs from ACNHAPI and store them
     * @param {Function} commit
     * @param {Object} state
     */
    async getBugs({ commit, state }) {
      if (state.bugs.loaded) return

      const { data } = await resources.bugs()

      commit(
        'SET_BUGS',
        data.map(bug => new Bug(bug))
      )
    },
    /**
     * Get fossils from ACNHAPI and store them
     * @param {Function} commit
     * @param {Object} state
     */
    async getFossils({ commit, state }) {
      if (state.fossils.loaded) return

      const { data } = await resources.fossils()

      commit(
        'SET_FOSSILS',
        data.map(fossil => new Fossil(fossil))
      )
    }
  }
})
