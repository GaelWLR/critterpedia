import axios from 'axios'

const acnhApi = axios.create({ baseURL: 'http://acnhapi.com/v1a/' })

const resources = {
  bugs: () => acnhApi.get('bugs'),
  fishes: () => acnhApi.get('fish'),
  fossils: () => acnhApi.get('fossils')
}

export { resources }
