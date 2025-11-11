<template>
  <div class="art-container">
    <h2>{{ $t('art') }}</h2>
    <options-bar resource="art" />
    <resource-card-grid :resources="art" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OptionsBar from '../components/OptionsBar.vue'
import ResourceCardGrid from '../components/ResourceCardGrid.vue'

export default {
  name: 'ArtView',
  components: {
    OptionsBar,
    ResourceCardGrid
  },
  computed: {
    ...mapGetters(['getResourceDataSortedAndFiltered']),
    art() {
      return this.getResourceDataSortedAndFiltered('art')
    }
  },
  created() {
    this.$store.dispatch('art/loadData')
  }
}
</script>

<style></style>
