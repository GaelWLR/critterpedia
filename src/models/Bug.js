import ACNHApiResource from './ACNHApiResource'
import { formatHours, formatMonths } from '../utils/formatResources'

export default class Bug extends ACNHApiResource {
  /**
   * Format raw resource data
   * @param {Object.<string, any>} data
   */
  constructor(data) {
    super(data)

    const {
      icon_uri: iconUri,
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
    this.location = location.toLowerCase()
    this.rarity = rarity.toLowerCase()
    this.monthsNorth = formatMonths(monthNothern, isAllYear)
    this.monthsSouth = formatMonths(monthSouthern, isAllYear)
    this.hours = formatHours(time, isAllDay)
  }
}
