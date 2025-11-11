import { art } from '../../plugins/axios'
import Art from '../../models/Art'

export default {
  namespaced: true,
  state() {
    return {
      data: [],
      sortingOptions: [
        {
          active: false,
          optRef: 'name',
          type: 'string',
          ascending: true
        }
      ],
      filters: {
        hasFake: {
          selected: 0,
          options: ['all', 'yes', 'no']
        }
      },
      loaded: false
    }
  },
  getters: {},
  mutations: {
    /**
     * @param {Object.<string, any>} state
     * @param {Array} art
     */
    SET_DATA(state, art) {
      state.data = art
      state.loaded = true
    }
  },
  actions: {
    /**
     * Get art from ACNHAPI and store them
     * @param {Function} commit
     * @param {boolean} loaded
     */
    async loadData({ commit, state: { loaded } }) {
      if (loaded) return

      const { data } = await art()

      const artData = Object.values(data).map(artwork => new Art(artwork))

      commit('SET_DATA', artData)
    }
  }
}
