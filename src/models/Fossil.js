import i18n from '../plugins/i18n'
import { formatResourceNames } from '../utils/acnhapi'

export default class Fossil {
  /**
   * Format raw fossil data
   * @param {Object} data
   */
  constructor(data) {
    this.data = data
    this.names = formatResourceNames(data.name)
  }

  /**
   * Returns the fossil id
   * @returns {string}
   */
  get id() {
    return this.data['file-name']
  }

  /**
   * Returns the fossil img uri
   * @returns {string}
   */
  get img() {
    return this.data.image_uri
  }

  /**
   * Returns the fossil name in the current locale
   * @returns {string}
   */
  get name() {
    return this.names.get(i18n.locale) || this.names.get(i18n.fallbackLocale)
  }

  /**
   * Returns the fossil price
   * @returns {string}
   */
  get price() {
    return this.data.price
  }
}
