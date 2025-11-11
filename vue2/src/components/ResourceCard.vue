<template>
  <div class="card">
    <div class="card-img">
      <img :src="imgUrl" :alt="`${name} img`" />
    </div>
    <div class="card-content">
      <template v-for="key in displayKeys">
        <div v-if="getProp(key)" :key="key">
          <span class="content-title">{{ $t(key) }}&nbsp;:&nbsp;</span>
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
    buyPrice: {
      type: String
    },
    id: {
      type: Number,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    },
    location: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: String
    },
    sellPrice: {
      type: String
    },
    shadow: {
      type: String
    }
  },
  computed: {
    displayKeys() {
      if (this.buyPrice && this.sellPrice) {
        return ['name', 'location', 'shadow', 'buyPrice', 'sellPrice'].filter(key => this[key])
      }
      return ['name', 'location', 'shadow', 'price'].filter(key => this[key])
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
  background-color: white;

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
