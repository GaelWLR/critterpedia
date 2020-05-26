import Vue from 'vue'
import VueRouter from 'vue-router'
// Views
import Home from '../views/Home.vue'
import Bugs from '../views/Bugs.vue'
import Fishes from '../views/Fishes.vue'
import Fossils from '../views/Fossils.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bugs',
      name: 'bugs',
      component: Bugs
    },
    {
      path: '/fishes',
      name: 'fishes',
      component: Fishes
    },
    {
      path: '/fossils',
      name: 'fossils',
      component: Fossils
    }
  ]
})

export default router
