<template>
  <div class="fossils-container">
    <h2>{{ $t('fossils') }}</h2>
    <options-bar resource="fossils"></options-bar>
    <resource-card-grid :resources="fossils"></resource-card-grid>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OptionsBar from '../components/OptionsBar.vue'
import ResourceCardGrid from '../components/ResourceCardGrid.vue'

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
