import ACNHApiResource from './ACNHApiResource'
import { formatHours, formatMonths, formatStringToTranslate } from '../utils/formatResources'

export default class Fish extends ACNHApiResource {
  /**
   * Format raw resource data
   * @param {Object.<string, any>} data
   */
  constructor(data) {
    super(data)

    const {
      icon_uri: iconUri,
      shadow,
      availability: {
        'month-northern': monthNothern,
        'month-southern': monthSouthern,
        isAllYear,
        time,
        isAllDay,
        location,
        rarity
      }
    } = data

    this.imgUrl = iconUri
    this._size = formatStringToTranslate(shadow.split(' ')[0])
    this._location = formatStringToTranslate(location)
    this.rarity = formatStringToTranslate(rarity)
    this.monthsNorth = formatMonths(monthNothern, isAllYear)
    this.monthsSouth = formatMonths(monthSouthern, isAllYear)
    this.hours = formatHours(time, isAllDay)
  }
}
