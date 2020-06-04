import ACNHApiResource from './ACNHApiResource'

export default class Bug extends ACNHApiResource {
  /**
   * Returns the bug icon uri
   * @returns {string}
   */
  get imgUrl() {
    return this.data.icon_uri
  }

  /**
   * Returns the bug location
   * @returns {string}
   */
  get location() {
    return this.data.availability.location.toLowerCase()
  }
}
