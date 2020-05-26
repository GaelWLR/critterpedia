import ACNHApiResource from './ACNHApiResource'

export default class Fish extends ACNHApiResource {
  /**
   * Returns the fish icon uri
   * @returns {string}
   */
  get icon() {
    return this.data.icon_uri
  }

  /**
   * Returns the fish size
   * @returns {string}
   */
  get size() {
    const shadow = this.data.shadow.split(' ')
    return shadow[0].toLowerCase()
  }

  /**
   * Returns the fish location
   * @returns {string}
   */
  get location() {
    return this.data.availability.location.toLowerCase()
  }
}
