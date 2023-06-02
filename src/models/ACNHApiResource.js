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
    this._price = data.price

    this.names = formatNames(data.name)
  }

  /**
   * Returns the resource name in the current locale
   * @returns {string}
   */
  get name() {
    return this.names.get(i18n.locale) || this.names.get(i18n.fallbackLocale)
  }

  /**
   * Returns the resource location in the current locale
   * @returns {string}
   */
  get location() {
    if (this._location) {
      return this._location
        .split('_&_')
        .map(location => i18n.t(location))
        .join(' & ')
    }

    return ''
  }

  /**
   * Returns the resource shadow in the current locale
   * @returns {string}
   */
  get shadow() {
    if (this._shadow) {
      return i18n.t(this._shadow)
    }

    return ''
  }

  get price() {
    return i18n.t('display_price', { price: this._price })
  }
}
