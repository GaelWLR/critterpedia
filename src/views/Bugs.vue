<template>
  <div class="bugs-container">
    <h2>{{ $t('bugs') }}</h2>
    <options-bar resource="bugs"></options-bar>
    <resource-card-grid :resources="bugs"></resource-card-grid>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OptionsBar from '../components/OptionsBar'
import ResourceCardGrid from '../components/ResourceCardGrid'

export default {
  name: 'Bugs',
  components: {
    OptionsBar,
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
