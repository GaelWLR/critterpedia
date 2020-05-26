import i18n from '../plugins/i18n'
import { formatResourceNames } from '../utils/acnhapi'

export default class Fish {
  /**
   * Format raw fish data
   * @param {Object} data
   */
  constructor(data) {
    this.data = data
    this.names = formatResourceNames(data.name)
  }

  /**
   * Returns the fish id
   * @returns {string}
   */
  get id() {
    return this.data['file-name']
  }

  /**
   * Returns the fish img uri
   * @returns {string}
   */
  get img() {
    return this.data.image_uri
  }

  /**
   * Returns the fish icon uri
   * @returns {string}
   */
  get icon() {
    return this.data.icon_uri
  }

  /**
   * Returns the fish name in the current locale
   * @returns {string}
   */
  get name() {
    return this.names.get(i18n.locale) || this.names.get(i18n.fallbackLocale)
  }

  /**
   * Returns the fish price
   * @returns {string}
   */
  get price() {
    return this.data.price
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
