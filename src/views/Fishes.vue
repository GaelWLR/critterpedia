<template>
  <div class="fishes-container">
    <h2>Fishes</h2>
    <filter-bar resource="fishes"></filter-bar>
    <resource-card-grid :resources="fishes"></resource-card-grid>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FilterBar from '../components/FilterBar'
import ResourceCardGrid from '../components/ResourceCardGrid'

export default {
  name: 'Fishes',
  components: {
    FilterBar,
    ResourceCardGrid
  },
  computed: {
    ...mapGetters('fishes', { fishes: 'getDataSortedAndFiltered' })
  },
  created() {
    this.$store.dispatch('fishes/loadData')
  }
}
</script>

<style></style>
