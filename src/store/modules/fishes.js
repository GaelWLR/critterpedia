import { resources } from '../../plugins/axios/index'
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
      filters: [],
      loaded: false
    }
  },
  getters: {
    /**
     * Sorts and filters fishes before returning them
     * @param {Array} data
     * @param {Array} sortingOptions
     */
    getDataSortedAndFiltered: ({ data, sortingOptions }) => {
      let fishes = data.map(fish => fish)

      for (const { active, optRef, type, ascending } of sortingOptions) {
        if (active) {
          switch (type) {
            case 'string':
              fishes.sort((a, b) =>
                ascending ? a[optRef].localeCompare(b[optRef]) : b[optRef].localeCompare(a[optRef])
              )
              break
            case 'number':
              fishes.sort((a, b) => (ascending ? a[optRef] - b[optRef] : b[optRef] - a[optRef]))
              break
          }
        }
      }

      return fishes
    }
  },
  mutations: {
    /**
     * @param {Object} state
     * @param {Array} fishes
     */
    SET_DATA(state, fishes) {
      state.data = fishes
      state.loaded = true
    },
    /**
     * @param {Object} state
     * @param {number} index
     * @param {boolean} active
     * @param {boolean} ascending
     */
    SET_SORTING_OPTION(state, { index, active, ascending }) {
      state.sortingOptions[index].active = active
      state.sortingOptions[index].ascending = ascending
    }
  },
  actions: {
    /**
     * Get fishes from ACNHAPI and store them
     * @param {Function} commit
     * @param {Object} state
     */
    async loadData({ commit, state }) {
      if (state.loaded) return

      const { data } = await resources.fishes()

      commit(
        'SET_DATA',
        data.map(fish => new Fish(fish))
      )
    },
    /**
     * Upadte a sorting option which has three state { active: false, ascending: true }, { active: true, ascending: true } or { active: true, ascending: false }
     * @param {Function} commit
     * @param {Object} state
     * @param {string} optRef
     */
    updateSortingOption({ commit, state }, optRef) {
      const index = state.sortingOptions.findIndex(sortingOption => sortingOption.optRef === optRef)

      const { active, ascending } = state.sortingOptions[index]

      const sortingOption = { index, active, ascending }

      if (active) {
        if (ascending) {
          sortingOption.ascending = false
        } else {
          sortingOption.active = false
          sortingOption.ascending = true
        }
      } else {
        sortingOption.active = true
      }

      commit('SET_SORTING_OPTION', sortingOption)
    }
  }
}
