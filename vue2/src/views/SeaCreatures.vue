<template>
  <div class="sea-creatures-container">
    <h2>{{ $t('sea_creatures') }}</h2>
    <options-bar resource="sea" />
    <resource-card-grid :resources="seaCreatures" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OptionsBar from '../components/OptionsBar.vue'
import ResourceCardGrid from '../components/ResourceCardGrid.vue'

export default {
  name: 'SeaCreaturesView',
  components: {
    OptionsBar,
    ResourceCardGrid
  },
  computed: {
    ...mapGetters(['getResourceDataSortedAndFiltered']),
    seaCreatures() {
      return this.getResourceDataSortedAndFiltered('sea')
    }
  },
  created() {
    this.$store.dispatch('sea/loadData')
  }
}
</script>

<style></style>
