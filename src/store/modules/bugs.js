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
          optRef: '_price',
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
     * @param {Array} bugs
     */
    SET_DATA(state, bugs) {
      state.data = bugs
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
     * Get bugs from ACNHAPI and store them
     * @param {Function} commit
     * @param {boolean} loaded
     */
    async loadData({ commit, state: { loaded } }) {
      if (loaded) return

      const { data } = await bugs()

      const bugsData = data.map(bug => new Bug(bug))

      const locations = []
      for (const bug of bugsData) {
        if (bug._location && !locations.includes(bug._location)) {
          locations.push(bug._location)
        }
      }
      locations.sort((a, b) => a.localeCompare(b))

      commit('SET_FILTER_OPTIONS', { filter: 'location', options: locations })

      commit('SET_DATA', bugsData)
    }
  }
}
