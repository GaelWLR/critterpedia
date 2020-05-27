<template>
  <div class="bugs-container">
    <h2>Bugs</h2>
    <resource-card-grid>
      <template v-for="(bug, key) in bugs" slot="cards">
        <resource-card v-bind:key="key" :id="bug.id" :img_url="bug.icon">
          <div slot="content">
            <span class="content-title">Name :</span>
            {{ bug.name }}
            <br />
            <span class="content-title">Location :</span>
            {{ bug.location }}
            <br />
            <span class="content-title">Price :</span>
            {{ bug.price }}
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
  name: 'Bugs',
  components: {
    ResourceCardGrid,
    ResourceCard
  },
  computed: {
    ...mapState(['bugs'])
  },
  created() {
    this.$store.dispatch('getBugs')
  }
}
</script>

<style></style>
