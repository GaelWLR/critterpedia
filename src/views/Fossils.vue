<template>
  <div class="fossils-container">
    <h3>Fossils</h3>
    <table>
      <thead>
        <tr>
          <td>Image</td>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(fossil, key) in fossils" v-bind:key="key">
          <td><img :src="fossil.img" alt="" /></td>
          <td>{{ fossil.name }}</td>
          <td>{{ fossil.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Fossils',
  computed: {
    ...mapState(['fossils'])
  },
  created() {
    this.$store.dispatch('getFossils')
  }
}
</script>

<style></style>
