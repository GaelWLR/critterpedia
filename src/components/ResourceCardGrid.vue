<template>
  <div>
    <transition-group class="cards-container" name="cards-list" tag="div">
      <resource-card
        class="cards-list-item"
        v-for="resource in resources"
        :key="resource.id"
        :id="resource.id"
        :img-url="resource.imgUrl"
        :name="resource.name"
        :location="resource.location"
        :size="resource.size"
        :price="resource.price"
      ></resource-card>
    </transition-group>
  </div>
</template>

<script>
import ResourceCard from './ResourceCard'

export default {
  name: 'ResourceCardGrid',
  components: {
    ResourceCard
  },
  props: {
    resources: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/_variables.scss';

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}

.cards-list-item {
  transition: all $transition-speed;
}

.cards-list-enter,
.cards-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
