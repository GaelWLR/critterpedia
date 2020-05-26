import i18n from '../plugins/i18n'
import { formatResourceNames } from '../utils/acnhapi'

export default class Bug {
  /**
   * Format raw bug data
   * @param {Object} data
   */
  constructor(data) {
    this.data = data
    this.names = formatResourceNames(data.name)
  }

  /**
   * Returns the bug id
   * @returns {string}
   */
  get id() {
    return this.data['file-name']
  }

  /**
   * Returns the bug img uri
   * @returns {string}
   */
  get img() {
    return this.data.image_uri
  }

  /**
   * Returns the bug icon uri
   * @returns {string}
   */
  get icon() {
    return this.data.icon_uri
  }

  /**
   * Returns the bug name in the current locale
   * @returns {string}
   */
  get name() {
    return this.names.get(i18n.locale) || this.names.get(i18n.fallbackLocale)
  }

  /**
   * Returns the bug price
   * @returns {string}
   */
  get price() {
    return this.data.price
  }

  /**
   * Returns the bug location
   * @returns {string}
   */
  get location() {
    return this.data.availability.location.toLowerCase()
  }
}
