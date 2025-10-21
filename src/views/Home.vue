<template>
  <div>
    <h2>{{ $t('home') }}</h2>
    <p>{{ $t('home_greetings_message') }}</p>

    <div v-if="mostExpensiveBug || mostExpensiveFish" class="most-expensive-section">
      <h3>{{ $t('most_expensive_now') }}</h3>
      <div class="cards-container">
        <div v-if="mostExpensiveBug" class="card-wrapper">
          <h4>{{ $t('most_expensive_bug') }}</h4>
          <resource-card
            :id="mostExpensiveBug.id"
            :img-url="mostExpensiveBug.imgUrl"
            :name="mostExpensiveBug.name"
            :location="mostExpensiveBug.location"
            :price="mostExpensiveBug.price"
          />
        </div>
        <div v-if="mostExpensiveFish" class="card-wrapper">
          <h4>{{ $t('most_expensive_fish') }}</h4>
          <resource-card
            :id="mostExpensiveFish.id"
            :img-url="mostExpensiveFish.imgUrl"
            :name="mostExpensiveFish.name"
            :location="mostExpensiveFish.location"
            :shadow="mostExpensiveFish.shadow"
            :price="mostExpensiveFish.price"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResourceCard from '../components/ResourceCard.vue'

export default {
  name: 'Home',
  components: {
    ResourceCard
  },
  computed: {
    mostExpensiveBug() {
      const bugs = this.$store.state.bugs.data
      if (!bugs.length) return null

      const now = new Date()
      const month = now.getMonth() + 1
      const hour = now.getHours()

      const availableNow = bugs.filter(bug => {
        return bug.monthsNorth.includes(month) && bug.hours.includes(hour)
      })

      if (!availableNow.length) return null

      return availableNow.reduce((max, bug) => (bug._price > max._price ? bug : max))
    },
    mostExpensiveFish() {
      const fishes = this.$store.state.fishes.data
      if (!fishes.length) return null

      const now = new Date()
      const month = now.getMonth() + 1
      const hour = now.getHours()

      const availableNow = fishes.filter(fish => {
        return fish.monthsNorth.includes(month) && fish.hours.includes(hour)
      })

      if (!availableNow.length) return null

      return availableNow.reduce((max, fish) => (fish._price > max._price ? fish : max))
    }
  },
  created() {
    this.$store.dispatch('bugs/loadData')
    this.$store.dispatch('fishes/loadData')
  }
}
</script>

<style scoped>
.most-expensive-section {
  margin-top: 2rem;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.card-wrapper h4 {
  margin-bottom: 0.5rem;
  color: #2c5f2d;
}
</style>
