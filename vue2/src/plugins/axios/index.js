import axios from 'axios'

const acnhApi = axios.create({
  baseURL: '/data/'
})

const art = () => acnhApi.get('art.json')
const bugs = () => acnhApi.get('bugs.json')
const fishes = () => acnhApi.get('fish.json')
const fossils = () => acnhApi.get('fossils.json')
const sea = () => acnhApi.get('sea.json')

export { art, bugs, fishes, fossils, sea }
