import Vue from 'vue'
import Vuex from 'vuex'
import { resources } from '../plugins/axios'
import Bug from '../models/Bug'
import Fish from '../models/Fish'
import Fossil from '../models/Fossil'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    fishes: [],
    fossils: []
  },
  mutations: {
    /**
     * @param {Object} state
     * @param {Array} bugs
     */
    SET_BUGS(state, bugs) {
      state.bugs = bugs
    },
    /**
     * @param {Object} state
     * @param {Array} fishes
     */
    SET_FISHES(state, fishes) {
      state.fishes = fishes
    },
    /**
     * @param {Object} state
     * @param {Array} fossils
     */
    SET_FOSSILS(state, fossils) {
      state.fossils = fossils
    }
  },
  actions: {
    /**
     * Get bugs from ACNHAPI and store them
     * @param {Function} commit
     * @param {Object} state
     */
    async getBugs({ commit, state }) {
      if (state.bugs.length) return

      const { data } = await resources.bugs()

      commit(
        'SET_BUGS',
        data.map(bug => new Bug(bug))
      )
    },
    /**
     * Get fishes from ACNHAPI and store them
     * @param {Function} commit
     * @param {Object} state
     */
    async getFishes({ commit, state }) {
      if (state.fishes.length) return

      const { data } = await resources.fishes()

      commit(
        'SET_FISHES',
        data.map(fish => new Fish(fish))
      )
    },
    /**
     * Get fossils from ACNHAPI and store them
     * @param {Function} commit
     * @param {Object} state
     */
    async getFossils({ commit, state }) {
      if (state.fossils.length) return

      const { data } = await resources.fossils()

      commit(
        'SET_FOSSILS',
        data.map(fossil => new Fossil(fossil))
      )
    }
  }
})
