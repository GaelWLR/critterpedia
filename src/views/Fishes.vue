<template>
  <div class="fishes-container">
    <h2>Fishes</h2>
    <options-bar resource="fishes"></options-bar>
    <resource-card-grid :resources="fishes"></resource-card-grid>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OptionsBar from '../components/OptionsBar'
import ResourceCardGrid from '../components/ResourceCardGrid'

export default {
  name: 'Fishes',
  components: {
    OptionsBar,
    ResourceCardGrid
  },
  computed: {
    ...mapGetters(['getResourceDataSortedAndFiltered']),
    fishes() {
      return this.getResourceDataSortedAndFiltered('fishes')
    }
  },
  created() {
    this.$store.dispatch('fishes/loadData')
  }
}
</script>

<style></style>
