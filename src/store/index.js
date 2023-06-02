import Vue from 'vue'
import Vuex from 'vuex'
import bugs from './modules/bugs'
import fishes from './modules/fishes'
import fossils from './modules/fossils'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    bugs,
    fishes,
    fossils
  },
  state: {},
  getters: {
    /**
     * Sorts and filters resources before returning them
     * @param {Object.<string, any>} data
     */
    getResourceDataSortedAndFiltered: state => resourceName => {
      let resources = state[resourceName].data.map(resource => resource)

      const { availability, shadow, location } = state[resourceName].filters
      const getSelected = filter => filter.options[filter.selected]

      if (availability) {
        const [time, hemisphere] = getSelected(availability).split('-')

        switch (time) {
          case 'this_month':
            resources = resources.filter(resource => {
              const months = hemisphere == 'north' ? resource.monthsNorth : resource.monthsSouth
              const month = new Date().getMonth() + 1

              return months.includes(month)
            })
            break
          case 'now':
            resources = resources.filter(resource => {
              const months = hemisphere == 'north' ? resource.monthsNorth : resource.monthsSouth
              const month = new Date().getMonth() + 1

              const { hours } = resource
              const hour = new Date().getHours()

              return months.includes(month) && hours.includes(hour)
            })
            break
        }
      }

      if (shadow) {
        const selectedShadow = getSelected(shadow)
        if (selectedShadow != 'all') {
          resources = resources.filter(resource => resource._shadow.split('_')[0] == selectedShadow)
        }
      }

      if (location) {
        const selectedLocation = getSelected(location)
        if (selectedLocation != 'all') {
          resources = resources.filter(resource => resource._location.split('_&_').includes(selectedLocation))
        }
      }

      for (const { active, optRef, type, ascending } of state[resourceName].sortingOptions) {
        if (active) {
          switch (type) {
            case 'string':
              resources.sort((a, b) =>
                ascending ? a[optRef].localeCompare(b[optRef]) : b[optRef].localeCompare(a[optRef])
              )
              break
            case 'number':
              resources.sort((a, b) => (ascending ? a[optRef] - b[optRef] : b[optRef] - a[optRef]))
              break
          }
        }
      }

      return resources
    }
  },
  mutations: {
    /**
     * @param {Object.<string, any>} state
     * @param {number} index
     * @param {boolean} active
     * @param {boolean} ascending
     */
    SET_FILTER(state, { resource, filter }) {
      const { optRef, selected } = filter

      state[resource].filters[optRef].selected = selected
    },
    /**
     * @param {Object.<string, any>} state
     * @param {number} index
     * @param {boolean} active
     * @param {boolean} ascending
     */
    SET_SORTING_OPTION(state, { resource, sortingOption }) {
      const { index, active, ascending } = sortingOption

      state[resource].sortingOptions[index].active = active
      state[resource].sortingOptions[index].ascending = ascending
    }
  },
  actions: {
    /**
     * Upadte a sorting option which has three state { active: false, ascending: true }, { active: true, ascending: true } or { active: true, ascending: false }
     * @param {Function} commit
     * @param {Object.<string, any>} state
     * @param {string} resource
     * @param {string} optRef
     */
    updateFilter({ commit }, { resource, optRef, selected }) {
      const filter = { optRef, selected: parseInt(selected) }

      commit('SET_FILTER', { resource, filter })
    },
    /**
     * Upadte a sorting option which has three state { active: false, ascending: true }, { active: true, ascending: true } or { active: true, ascending: false }
     * @param {Function} commit
     * @param {Object.<string, any>} state
     * @param {string} resource
     * @param {string} optRef
     */
    updateSortingOption({ commit, state }, { resource, optRef }) {
      const index = state[resource].sortingOptions.findIndex(sortingOption => sortingOption.optRef === optRef)

      const { active, ascending } = state[resource].sortingOptions[index]

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

      commit('SET_SORTING_OPTION', { resource, sortingOption })
    }
  }
})
