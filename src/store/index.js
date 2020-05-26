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
    SET_BUGS(state, bugs) {
      state.bugs = bugs
    },
    SET_FISHES(state, fishes) {
      state.fishes = fishes
    },
    SET_FOSSILS(state, fossils) {
      state.fossils = fossils
    }
  },
  actions: {
    async getBugs({ commit, state }) {
      if (state.bugs.length) return

      const bugs = []
      const { data } = await resources.bugs()

      for (const bug in data) {
        bugs.push(new Bug(data[bug]))
      }

      commit('SET_BUGS', bugs)
    },
    async getFishes({ commit, state }) {
      if (state.fishes.length) return

      const fishes = []
      const { data } = await resources.fishes()

      for (const fish in data) {
        fishes.push(new Fish(data[fish]))
      }

      commit('SET_FISHES', fishes)
    },
    async getFossils({ commit, state }) {
      if (state.fossils.length) return

      const fossils = []
      const { data } = await resources.fossils()

      for (const fossil in data) {
        fossils.push(new Fossil(data[fossil]))
      }

      commit('SET_FOSSILS', fossils)
    }
  }
})
