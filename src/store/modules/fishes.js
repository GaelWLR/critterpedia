import { fishes } from '../../plugins/axios'
import Fish from '../../models/Fish'

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
      filters: {
        hemisphere: {
          selected: 0,
          options: ['north', 'south']
        },
        availability: {
          selected: 0,
          options: ['all', 'this_month', 'now']
        }
      },
      loaded: false
    }
  },
  getters: {},
  mutations: {
    /**
     * @param {Object.<string, any>} state
     * @param {Array} fishes
     */
    SET_DATA(state, fishes) {
      state.data = fishes
      state.loaded = true
    }
  },
  actions: {
    /**
     * Get fishes from ACNHAPI and store them
     * @param {Function} commit
     * @param {boolean} loaded
     */
    async loadData({ commit, state: { loaded } }) {
      if (loaded) return

      const { data } = await fishes()

      commit(
        'SET_DATA',
        data.map(fish => new Fish(fish))
      )
    }
  }
}
