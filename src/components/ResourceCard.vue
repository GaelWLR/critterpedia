<template>
  <div class="card">
    <div class="card-img">
      <img :src="imgUrl" :alt="`${name} img`" />
    </div>
    <div class="card-content">
      <template v-for="key in keys">
        <div v-if="getProp(key)" :key="key">
          <span class="content-title">{{ $t(key) }}&nbsp;:</span>
          <span class="content-text">{{ getProp(key) }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResourceCard',
  props: {
    id: {
      type: Number,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    location: {
      type: String
    },
    size: {
      type: String
    },
    price: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      keys: ['name', 'location', 'size', 'price']
    }
  },
  methods: {
    getProp(prop) {
      return this[prop]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/_variables.scss';

.card {
  display: inline-flex;
  flex-direction: column;
  flex-grow: 1;
  border: 1px solid $secondary-color;
  border-radius: 1rem;
  overflow: hidden;
  transition: all $transition-speed-short ease-in-out;
  font-size: 0.8rem;

  &:hover {
    transform: scale(1.05);
  }
}

.card-img {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0.3rem 0.3rem;
  height: 5rem;

  img {
    object-fit: contain;
  }
}

.card-content {
  flex-grow: 1;
  padding: 0.5rem 0.5rem;
  background-color: $primary-color;
}

.content-title {
  font-weight: bolder;
  color: $tertiary-color;
}

.content-text {
  font-weight: lighter;
}
</style>
