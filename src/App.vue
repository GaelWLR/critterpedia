<template>
  <div>
    <nav-bar class="navbar"></nav-bar>
    <router-view class="content" />
  </div>
</template>

<script>
import NavBar from './components/layout/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import './assets/css/_variables.scss';

html,
body {
  margin: 0;
  padding: 0;
}

.navbar {
  width: 100vw;
  height: $navbar-size;
  position: fixed;
  bottom: 0;

  @media screen and (min-width: 768px) {
    width: $navbar-size;
    height: 100vh;
    left: 0;
  }
}

.content {
  height: calc(100vh - #{$navbar-size});
  margin-left: 0;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    height: 100vh;
    margin-left: $navbar-size;
  }
}
</style>
