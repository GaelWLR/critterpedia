import ACNHApiResource from './ACNHApiResource'
import { formatHours, formatMonths, formatStringToTranslate } from '../utils/formatResources'

export default class Sea extends ACNHApiResource {
  /**
   * Format raw resource data
   * @param {Object.<string, any>} data
   */
  constructor(data) {
    super(data)

    const {
      icon_uri: iconUri,
      shadow,
      speed,
      availability: { 'month-northern': monthNothern, 'month-southern': monthSouthern, isAllYear, time, isAllDay }
    } = data

    this.imgUrl = iconUri
    this._shadow = formatStringToTranslate(shadow)
    this._speed = formatStringToTranslate(speed)
    this.monthsNorth = formatMonths(monthNothern, isAllYear)
    this.monthsSouth = formatMonths(monthSouthern, isAllYear)
    this.hours = formatHours(time, isAllDay)
  }
}
