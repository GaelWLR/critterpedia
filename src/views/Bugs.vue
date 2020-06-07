<template>
  <div class="bugs-container">
    <h2>Bugs</h2>
    <filter-bar resource="bugs"></filter-bar>
    <resource-card-grid :resources="bugs"></resource-card-grid>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FilterBar from '../components/FilterBar'
import ResourceCardGrid from '../components/ResourceCardGrid'

export default {
  name: 'Bugs',
  components: {
    FilterBar,
    ResourceCardGrid
  },
  computed: {
    ...mapGetters(['getResourceDataSortedAndFiltered']),
    bugs() {
      return this.getResourceDataSortedAndFiltered('bugs')
    }
  },
  created() {
    this.$store.dispatch('bugs/loadData')
  }
}
</script>

<style></style>
