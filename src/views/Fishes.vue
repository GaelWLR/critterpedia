<template>
  <div class="fishes-container">
    <h2>Fishes</h2>
    <filter-bar>
      <template slot="buttons">
        <template v-for="(option, key) of sortingOptions">
          <sort-button
            :key="key"
            :optRef="option.optRef"
            :active="option.active"
            :ascending="option.ascending"
            @click.native="updateSortingOption(option.optRef)"
          ></sort-button>
        </template>
      </template>
    </filter-bar>
    <resource-card-grid>
      <template v-for="(fish, key) in fishes" slot="cards">
        <resource-card :key="key" :id="fish.id" :img_url="fish.icon">
          <div slot="content">
            <span class="content-title">Name :</span>
            {{ fish.name }}
            <br />
            <span class="content-title">Location :</span>
            {{ fish.location }}
            <br />
            <span class="content-title">Size :</span>
            {{ fish.size }}
            <br />
            <span class="content-title">Price :</span>
            {{ fish.price }}
            <br />
          </div>
        </resource-card>
      </template>
    </resource-card-grid>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import FilterBar from '../components/FilterBar'
import ResourceCardGrid from '../components/ResourceCardGrid'
import ResourceCard from '../components/ResourceCard'
import SortButton from '../components/SortButton'

export default {
  name: 'Fishes',
  components: {
    FilterBar,
    ResourceCardGrid,
    ResourceCard,
    SortButton
  },
  computed: {
    ...mapState('fishes', ['sortingOptions']),
    ...mapGetters('fishes', { fishes: 'getDataSortedAndFiltered' })
  },
  methods: {
    ...mapActions('fishes', ['updateSortingOption'])
  },
  async created() {
    await this.$store.dispatch('fishes/loadData')
  }
}
</script>

<style></style>
