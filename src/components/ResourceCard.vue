<template>
  <div class="card">
    <div class="card-img">
      <img :src="img_url" :alt="`${id}_img`" />
    </div>
    <div class="card-content">
      <slot name="content"></slot>
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
    img_url: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/_variables.scss';

.card {
  display: inline-flex;
  flex-direction: row;
  flex-grow: 1;
  border: 1px solid grey;
  border-radius: 1rem;
  overflow: hidden;
}

.card-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 4rem;
  padding: 0.3rem 0.3rem;
  background-color: $primary-color;

  & > img {
    object-fit: contain;
  }
}

.card-content {
  flex-grow: 1;
  width: max-content;
  border-left: 1px solid grey;
  padding: 0.5rem 0.5rem;
  background-color: $secondary-color;
  font-size: 1.2rem;
}

.content-title {
  font-weight: bolder;
  color: $tertiary-color;
}
</style>
