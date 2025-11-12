import { sea } from '../../plugins/axios'
import Sea from '../../models/Sea'

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
          options: ['all']
        },
        speed: {
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
     * @param {Array} seaCreatures
     */
    SET_DATA(state, seaCreatures) {
      state.data = seaCreatures
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
     * Get sea creatures from ACNHAPI and store them
     * @param {Function} commit
     * @param {boolean} loaded
     */
    async loadData({ commit, state: { loaded } }) {
      if (loaded) return

      const { data } = await sea()

      const seaData = Object.values(data).map(creature => new Sea(creature))

      const shadows = []
      const speeds = []
      for (const creature of seaData) {
        if (creature._shadow && !shadows.includes(creature._shadow)) {
          shadows.push(creature._shadow)
        }
        if (creature._speed && !speeds.includes(creature._speed)) {
          speeds.push(creature._speed)
        }
      }
      shadows.sort((a, b) => a.localeCompare(b))
      speeds.sort((a, b) => a.localeCompare(b))

      commit('SET_FILTER_OPTIONS', { filter: 'shadow', options: shadows })
      commit('SET_FILTER_OPTIONS', { filter: 'speed', options: speeds })

      commit('SET_DATA', seaData)
    }
  }
}
