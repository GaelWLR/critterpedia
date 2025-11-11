<template>
  <div class="filter-container">
    <label :for="selectId">{{ $t(optRef) }}&nbsp;:</label>
    <select :id="selectId">
      <option v-for="(option, key) in options" :key="key" :value="key">{{ $t(option) }}</option>
    </select>
    <font-awesome-icon :icon="['fas', 'sort']" />
  </div>
</template>

<script>
export default {
  name: 'FilterSelect',
  props: {
    optRef: {
      type: String,
      required: true
    },
    selected: {
      type: Number,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  computed: {
    selectId() {
      return `select-${this.optRef}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/_variables.scss';

.filter-container {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: $primary-color;
  color: $tertiary-color;
  font-size: 1rem;

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background-color: $primary-color;
    font-size: 1rem;
  }
}
</style>
