import { fossils } from '../../plugins/axios'
import Fossil from '../../models/Fossil'

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
     * Sorts and filters fossils before returning them
     * @param {Array} data
     * @param {Array} sortingOptions
     */
    getDataSortedAndFiltered: ({ data, sortingOptions }) => {
      let fossils = data.map(fossil => fossil)

      for (const { active, optRef, type, ascending } of sortingOptions) {
        if (active) {
          switch (type) {
            case 'string':
              fossils.sort((a, b) =>
                ascending ? a[optRef].localeCompare(b[optRef]) : b[optRef].localeCompare(a[optRef])
              )
              break
            case 'number':
              fossils.sort((a, b) => (ascending ? a[optRef] - b[optRef] : b[optRef] - a[optRef]))
              break
          }
        }
      }

      return fossils
    }
  },
  mutations: {
    /**
     * @param {Object} state
     * @param {Array} fossils
     */
    SET_DATA(state, fossils) {
      state.data = fossils
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
     * Get fossils from ACNHAPI and store them
     * @param {Function} commit
     * @param {Object} state
     */
    async loadData({ commit, state }) {
      if (state.loaded) return

      const { data } = await fossils()

      commit(
        'SET_DATA',
        data.map(fossil => new Fossil(fossil))
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
