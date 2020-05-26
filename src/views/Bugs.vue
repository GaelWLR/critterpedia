<template>
  <div class="bugs-container">
    <h3>Bugs</h3>
    <table>
      <thead>
        <tr>
          <td>Image</td>
          <td>Name</td>
          <td>Price</td>
          <td>Location</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bug, key) in bugs" v-bind:key="key">
          <td><img class="resource-img" :src="bug.img" alt="" /></td>
          <td>{{ bug.name }}</td>
          <td>{{ bug.price }}</td>
          <td>{{ bug.location }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Bugs',
  computed: {
    ...mapState(['bugs'])
  },
  created() {
    this.$store.dispatch('getBugs')
  }
}
</script>

<style lang="scss" scoped>
.resource-img {
  height: 40px;
}
</style>
