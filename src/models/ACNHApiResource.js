import i18n from '../plugins/i18n'
import { formatNames } from '../utils/formatResources'

export default class ACNHApiResource {
  /**
   * Format raw resource data
   * @param {Object.<string, any>} data
   */
  constructor(data) {
    this.id = data.id
    this.reference = data['file-name']
    this.imgUrl = data.image_uri
    this.price = data.price

    this.names = formatNames(data.name)
  }

  /**
   * Returns the resource name in the current locale
   * @returns {string}
   */
  get name() {
    return this.names.get(i18n.locale) || this.names.get(i18n.fallbackLocale)
  }
}
