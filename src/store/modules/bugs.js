import { bugs } from '../../plugins/axios'
import Bug from '../../models/Bug'

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
        },
        {
          active: false,
          optRef: 'price',
          type: 'number',
          ascending: true
        }
      ],
      filters: [],
      loaded: false
    }
  },
  getters: {},
  mutations: {
    /**
     * @param {Object.<string, any>} state
     * @param {Array} bugs
     */
    SET_DATA(state, bugs) {
      state.data = bugs
      state.loaded = true
    }
  },
  actions: {
    /**
     * Get bugs from ACNHAPI and store them
     * @param {Function} commit
     * @param {boolean} loaded
     */
    async loadData({ commit, state: { loaded } }) {
      if (loaded) return

      const { data } = await bugs()

      commit(
        'SET_DATA',
        data.map(bug => new Bug(bug))
      )
    }
  }
}
