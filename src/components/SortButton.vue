<template>
  <button>Sort by {{ optRef }}</button>
</template>

<script>
export default {
  name: 'SortButton',
  props: {
    optRef: {
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
  }
}
</script>

<style></style>
