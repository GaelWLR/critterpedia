<template>
  <div class="options-bar-container">
    <template v-for="(option, key) of sortingOptions">
      <sort-button
        :key="`option-${key}`"
        :optRef="option.optRef"
        :type="option.type"
        :active="option.active"
        :ascending="option.ascending"
        @click.native="updateSortingOption({ optRef: option.optRef, resource })"
      ></sort-button>
    </template>
    <template v-for="(filter, key) of filters">
      <filter-select
        :key="`filter-${key}`"
        :optRef="key"
        :selected="filter.selected"
        :options="filter.options"
        @change.native="updateFilter({ optRef: key, resource, $event })"
      ></filter-select>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import FilterSelect from './FilterSelect'
import SortButton from './SortButton'

export default {
  name: 'OptionsBar',
  components: {
    FilterSelect,
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
      filters(state) {
        return state[this.resource].filters
      },
      sortingOptions(state) {
        return state[this.resource].sortingOptions
      }
    })
  },
  methods: {
    ...mapActions({
      updateFilter(dispacth, payload) {
        return dispacth('updateFilter', {
          optRef: payload.optRef,
          resource: payload.resource,
          selected: payload.$event.target.value
        })
      },
      updateSortingOption(dispacth, payload) {
        return dispacth('updateSortingOption', payload)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.options-bar-container {
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0;
}
</style>
