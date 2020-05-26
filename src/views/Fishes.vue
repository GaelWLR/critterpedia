<template>
  <div class="fishes-container">
    <h3>Fishes</h3>
    <table>
      <thead>
        <tr>
          <td>Image</td>
          <td>Name</td>
          <td>Price</td>
          <td>Location</td>
          <td>Size</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(fish, key) in fishes" v-bind:key="key">
          <td><img class="resource-img" :src="fish.img" alt="" /></td>
          <td>{{ fish.name }}</td>
          <td>{{ fish.price }}</td>
          <td>{{ fish.location }}</td>
          <td>{{ fish.size }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Fishes',
  computed: {
    ...mapState(['fishes'])
  },
  created() {
    this.$store.dispatch('getFishes')
  }
}
</script>

<style lang="scss" scoped>
.resource-img {
  height: 40px;
}
</style>
