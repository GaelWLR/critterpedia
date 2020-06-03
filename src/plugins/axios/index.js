import axios from 'axios'

const acnhApi = axios.create({ baseURL: 'http://acnhapi.com/v1a/' })

const bugs = () => acnhApi.get('bugs')
const fishes = () => acnhApi.get('fish')
const fossils = () => acnhApi.get('fossils')

export { bugs, fishes, fossils }
