<template>
  <div class="fishes-container">
    <h2>Fishes</h2>
    <resource-card-grid>
      <template v-for="(fish, key) in fishes" slot="cards">
        <resource-card v-bind:key="key" :id="fish.id" :img_url="fish.icon">
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
import { mapState } from 'vuex'
import ResourceCardGrid from '../components/ResourceCardGrid'
import ResourceCard from '../components/ResourceCard'

export default {
  name: 'Fishes',
  components: {
    ResourceCardGrid,
    ResourceCard
  },
  computed: {
    ...mapState(['fishes'])
  },
  created() {
    this.$store.dispatch('getFishes')
  }
}
</script>

<style></style>
