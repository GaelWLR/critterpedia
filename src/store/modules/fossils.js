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
  getters: {},
  mutations: {
    /**
     * @param {Object.<string, any>} state
     * @param {Array} fossils
     */
    SET_DATA(state, fossils) {
      state.data = fossils
      state.loaded = true
    }
  },
  actions: {
    /**
     * Get fossils from ACNHAPI and store them
     * @param {Function} commit
     * @param {boolean} loaded
     */
    async loadData({ commit, state: { loaded } }) {
      if (loaded) return

      const { data } = await fossils()
      let index = 0

      commit(
        'SET_DATA',
        data.map(fossil => {
          fossil.id = index++
          return new Fossil(fossil)
        })
      )
    }
  }
}
