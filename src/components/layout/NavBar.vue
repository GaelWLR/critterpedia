<template>
  <nav class="navbar-container">
    <router-link class="navbar-link" v-for="(link, key) in links" :key="key" :to="{ name: link.name }">
      <i class="link-icon">
        <font-awesome-icon :icon="['fas', link.icon]"></font-awesome-icon>
      </i>
      <span class="link-text">{{ $t(link.name) }}</span>
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
          icon: 'home'
        },
        {
          name: 'bugs',
          icon: 'bug'
        },
        {
          name: 'fishes',
          icon: 'fish'
        },
        {
          name: 'fossils',
          icon: 'bone'
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
  overflow: hidden;
  filter: grayscale(20%);

  @media screen and (min-width: #{$tablet-breakpoint}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;

    &:hover {
      .link-text {
        display: block;
      }
    }
  }
}

.navbar-link {
  display: flex;
  align-items: center;
  height: $navbar-size;
  text-decoration: none;
  color: $tertiary-color;
  filter: grayscale(20%) opacity(0.6);
  transition: $transition-speed;

  &:hover {
    filter: grayscale(0%) opacity(1);
  }

  @media screen and (min-width: #{$tablet-breakpoint}) {
    width: 100%;
  }
}

.link-icon {
  height: $navbar-size;
  width: $navbar-size;

  & > svg {
    height: $navbar-size / 2;
    width: $navbar-size / 2;
    margin: $navbar-size / 4;
  }
}

.link-text {
  display: none;
  margin: 0 1rem;
  font-size: 1.4rem;
  font-weight: bold;
  white-space: nowrap;

  @media screen and (min-width: #{$desktop-breakpoint}) {
    display: block;
  }
}

.router-link-exact-active {
  background-color: $tertiary-color;
  color: $primary-color;
}
</style>
