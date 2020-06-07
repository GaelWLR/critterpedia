<template>
  <div class="fossils-container">
    <h2>Fossils</h2>
    <filter-bar resource="fossils"></filter-bar>
    <resource-card-grid :resources="fossils"></resource-card-grid>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FilterBar from '../components/FilterBar'
import ResourceCardGrid from '../components/ResourceCardGrid'

export default {
  name: 'Fossils',
  components: {
    FilterBar,
    ResourceCardGrid
  },
  computed: {
    ...mapGetters(['getResourceDataSortedAndFiltered']),
    fossils() {
      return this.getResourceDataSortedAndFiltered('fossils')
    }
  },
  created() {
    this.$store.dispatch('fossils/loadData')
  }
}
</script>

<style></style>
