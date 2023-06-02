<template>
  <div class="app-container">
    <nav-bar class="navbar"></nav-bar>
    <router-view class="content" />
  </div>
</template>

<script>
import NavBar from './components/layout/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
@import './assets/css/_variables.scss';

.app-container {
  @media screen and (min-width: #{$desktop-breakpoint}) {
    display: flex;
    flex-direction: row;
  }
}

.navbar {
  width: 100vw;
  height: $navbar-size;
  position: fixed;
  bottom: 0;
  z-index: 2;

  @media screen and (min-width: #{$tablet-breakpoint}) {
    width: $navbar-size;
    max-width: $navbar-size;
    height: 100vh;
    left: 0;

    &:hover {
      width: max-content;
      max-width: 100vw;
      transition: max-width $transition-speed;
    }
  }

  @media screen and (min-width: #{$desktop-breakpoint}) {
    position: relative;
    width: max-content;
    max-width: 100vw;
    height: 100vh;
    left: 0;
  }
}

.content {
  height: calc(100vh - #{$navbar-size});
  margin-left: 0;
  padding: 1rem;

  @media screen and (min-width: #{$tablet-breakpoint}) {
    height: 100vh;
    margin-left: $navbar-size;
  }

  @media screen and (min-width: #{$desktop-breakpoint}) {
    flex-grow: 1;
    margin-left: 0;
    overflow-y: scroll;
    box-sizing: border-box;
  }
}
</style>
