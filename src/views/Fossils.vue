<template>
  <div class="fossils-container">
    <h2>Fossils</h2>
    <resource-card-grid>
      <template v-for="(fossil, key) in fossils" slot="cards">
        <resource-card v-bind:key="key" :id="fossil.id" :img_url="fossil.img">
          <div slot="content">
            <span class="content-title">Name :</span>
            <span>{{ fossil.name }}</span>
            <br />
            <span class="content-title">Price :</span>
            <span>{{ fossil.price }}</span>
            <br />
          </div>
        </resource-card>
      </template>
    </resource-card-grid>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ResourceCardGrid from '../components/ResourceCardGrid'
import ResourceCard from '../components/ResourceCard'

export default {
  name: 'Fossils',
  components: {
    ResourceCardGrid,
    ResourceCard
  },
  computed: {
    ...mapState(['fossils'])
  },
  created() {
    this.$store.dispatch('getFossils')
  }
}
</script>

<style></style>
