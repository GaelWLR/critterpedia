<template>
  <div>
    <transition-group v-if="resources.length" class="cards-container" name="cards-list" tag="div">
      <resource-card
        class="cards-list-item"
        v-for="resource in resources"
        :key="resource.reference"
        :id="resource.id"
        :img-url="resource.imgUrl"
        :name="resource.name"
        :location="resource.location"
        :shadow="resource.shadow"
        :price="resource.price"
      />
    </transition-group>
    <h2 v-else>{{ $t('no_results') }}</h2>
  </div>
</template>

<script>
import ResourceCard from './ResourceCard.vue'

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
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}

.cards-list-item {
  transition: all $transition-speed ease-in-out;
}

.cards-list-enter {
  transform: scale(0.5) translatey(3rem);
  opacity: 0;
}

.cards-list-leave-active {
  position: absolute;
  z-index: -1;
}

.cards-list-leave-to {
  transform: scale(0.2);
  opacity: 0;
}
</style>
