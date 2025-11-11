import i18n from '../plugins/i18n'
import ACNHApiResource from './ACNHApiResource'

export default class Art extends ACNHApiResource {
  /**
   * Format raw resource data
   * @param {Object.<string, any>} data
   */
  constructor(data) {
    super(data)

    const { 'buy-price': buyPrice, 'sell-price': sellPrice, hasFake, 'museum-desc': museumDesc } = data

    this._buyPrice = buyPrice
    this._sellPrice = sellPrice
    this.hasFake = hasFake
    this.museumDesc = museumDesc
  }

  /**
   * Returns the formatted buy price
   * @returns {string}
   */
  get buyPrice() {
    return i18n.t('display_price', { price: this._buyPrice })
  }

  /**
   * Returns the formatted sell price
   * @returns {string}
   */
  get sellPrice() {
    return i18n.t('display_price', { price: this._sellPrice })
  }
}
