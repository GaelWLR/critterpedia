<template>
  <div class="app-container">
    <nav class="app-nav">
      <h3>Critterpedia</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'bugs' }">Bugs</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'fishes' }">Fishes</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'fossils' }">Fossils</router-link>
        </li>
      </ul>
    </nav>
    <router-view class="view-container" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

.app-container {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  height: 100vh;
}

.app-nav {
  background-color: grey;
  padding: 1rem;

  & > ul {
    list-style: none;
    padding: 0;
  }
}

.view-container {
  height: 100%;
  overflow-y: scroll;
  flex-grow: 1;
}
</style>
