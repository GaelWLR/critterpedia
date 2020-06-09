<template>
  <button :class="{ active }">
    Sort by {{ optRef }}
    <font-awesome-icon :icon="['fas', icon]"></font-awesome-icon>
  </button>
</template>

<script>
export default {
  name: 'SortButton',
  props: {
    optRef: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    },
    ascending: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    icon() {
      switch (this.type) {
        case 'string':
          return this.ascending ? 'sort-alpha-down' : 'sort-alpha-up'

        case 'number':
          return this.ascending ? 'sort-numeric-down' : 'sort-numeric-up'

        default:
          return this.ascending ? '' : ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/_variables.scss';

button {
  border: none;
  padding: 0.5rem 1rem;
  background-color: $primary-color;
  color: $tertiary-color;
  font-size: 1rem;

  &:hover {
    box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
  }

  &.active {
    background-color: $tertiary-color;
    color: $primary-color;
  }
}
</style>
