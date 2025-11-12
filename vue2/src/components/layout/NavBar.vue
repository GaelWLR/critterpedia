<template>
  <nav class="navbar-container">
    <router-link class="navbar-link navbar-link-fixed" :to="{ name: 'home' }">
      <i class="link-icon">
        <font-awesome-icon :icon="['fas', 'home']" />
      </i>
      <span class="link-text">{{ $t('home') }}</span>
    </router-link>
    <div class="navbar-scrollable" ref="navbar">
      <router-link class="navbar-link" v-for="(link, key) in scrollableLinks" :key="key" :to="{ name: link.name }">
        <i class="link-icon">
          <font-awesome-icon :icon="['fas', link.icon]" />
        </i>
        <span class="link-text">{{ $t(link.name) }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      scrollableLinks: [
        {
          name: 'art',
          icon: 'palette'
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
        },
        {
          name: 'sea_creatures',
          icon: 'anchor'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
@import '../../assets/css/_variables.scss';

.navbar-container {
  background-color: $secondary-color;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  filter: grayscale(20%);

  @media screen and (min-width: #{$tablet-breakpoint}) {
    flex-direction: column;
    align-items: flex-start;

    &:hover {
      .link-text {
        display: block;
      }
    }
  }
}

.navbar-scrollable {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  // Scrollbar visible mais stylée sur mobile
  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba($tertiary-color, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba($tertiary-color, 0.5);
    border-radius: 2px;
  }

  @media screen and (min-width: #{$tablet-breakpoint}) {
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
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
  flex-shrink: 0; // Empêche les items de rétrécir sur mobile

  &:hover {
    filter: grayscale(0%) opacity(1);
  }

  @media screen and (min-width: #{$tablet-breakpoint}) {
    width: 100%;
  }
}

.navbar-link-fixed {
  flex-shrink: 0; // Toujours garde sa taille sur mobile
}

.link-icon {
  height: $navbar-size;
  width: $navbar-size;

  & > svg {
    height: math.div($navbar-size, 2);
    width: math.div($navbar-size, 2);
    margin: math.div($navbar-size, 4);
  }
}

.link-text {
  display: none;
  margin: 0 1rem;
  font-size: 1.4rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: #{$desktop-breakpoint}) {
    display: block;
  }
}

.router-link-exact-active {
  background-color: $tertiary-color;
  color: $primary-color;
}
</style>
