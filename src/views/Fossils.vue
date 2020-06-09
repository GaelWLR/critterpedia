<template>
  <div class="fossils-container">
    <h2>Fossils</h2>
    <options-bar resource="fossils"></options-bar>
    <resource-card-grid :resources="fossils"></resource-card-grid>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OptionsBar from '../components/OptionsBar'
import ResourceCardGrid from '../components/ResourceCardGrid'

export default {
  name: 'Fossils',
  components: {
    OptionsBar,
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
