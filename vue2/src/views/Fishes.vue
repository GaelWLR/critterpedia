<template>
  <div class="fishes-container">
    <h2>{{ $t('fishes') }}</h2>
    <options-bar resource="fishes" />
    <resource-card-grid :resources="fishes" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OptionsBar from '../components/OptionsBar.vue'
import ResourceCardGrid from '../components/ResourceCardGrid.vue'

export default {
  name: 'FishesView',
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
