<template>
  <div class="cards-container">
    <slot name="cards"></slot>
  </div>
</template>

<script>
export default {
  name: 'ResourceCardGrid'
}
</script>

<style lang="scss" scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}
</style>
