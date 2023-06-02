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
          optRef: '_price',
          type: 'number',
          ascending: true
        }
      ],
      filters: {
        availability: {
          selected: 0,
          options: ['all', 'this_month-north', 'this_month-south', 'now-north', 'now-south']
        },
        shadow: {
          selected: 0,
          options: ['all', 'narrow', 'smallest', 'small', 'medium', 'large', 'largest']
        },
        location: {
          selected: 0,
          options: ['all']
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
    },
    /**
     * @param {Object.<string, any>} state
     * @param {string} filter
     * @param {Array} options
     */
    SET_FILTER_OPTIONS(state, { filter, options }) {
      for (const option of options) {
        state.filters[filter].options.push(option)
      }
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

      const fishesData = data.map(fish => new Fish(fish))

      const locations = []
      for (const fish of fishesData) {
        if (fish._location && !locations.includes(fish._location.split('_&_')[0])) {
          locations.push(fish._location)
        }
      }
      locations.sort((a, b) => a.localeCompare(b))

      commit('SET_FILTER_OPTIONS', { filter: 'location', options: locations })

      commit('SET_DATA', fishesData)
    }
  }
}
