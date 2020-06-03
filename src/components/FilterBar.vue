<template>
  <div class="filter-bar-container">
    <template v-for="(option, key) of sortingOptions">
      <sort-button
        :key="key"
        :optRef="option.optRef"
        :type="option.type"
        :active="option.active"
        :ascending="option.ascending"
        @click.native="updateSortingOption(option.optRef)"
      ></sort-button>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import SortButton from './SortButton'

export default {
  name: 'FilterBar',
  components: {
    SortButton
  },
  props: {
    resource: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      sortingOptions(state) {
        return state[this.resource].sortingOptions
      }
    })
  },
  methods: {
    ...mapActions({
      updateSortingOption(dispacth, payload) {
        return dispacth(`${this.resource}/updateSortingOption`, payload)
      }
    })
  },
  created() {
    console.log(this.resource)
  }
}
</script>

<style lang="scss" scoped>
.filter-bar-container {
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0;
}
</style>
