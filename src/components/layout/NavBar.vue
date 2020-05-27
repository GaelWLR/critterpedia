<template>
  <nav class="navbar-container">
    <router-link class="navbar-link" v-for="(link, key) in links" v-bind:key="key" :to="{ name: link.name }">
      <i></i>
      <span class="link-text">{{ link.title }}</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      links: [
        {
          name: 'home',
          title: 'Home',
          icon: ''
        },
        {
          name: 'bugs',
          title: 'Bugs',
          icon: ''
        },
        {
          name: 'fishes',
          title: 'Fishes',
          icon: ''
        },
        {
          name: 'fossils',
          title: 'Fossils',
          icon: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/_variables.scss';

.navbar-container {
  background-color: $secondary-color;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  padding: 0;
  margin: 0;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: start;
  }
}

.navbar-link {
  display: flex;
  align-items: center;
  height: 5rem;
  text-decoration: none;
  transition: $transition-speed;
  color: $tertiary-color;

  &:hover {
    color: black;
  }
}

.link-icon {
}

.link-text {
}
</style>
