import i18n from '../plugins/i18n'

/**
 * Format name object into a Map
 * @param {Object} names
 * @returns {Map}
 */
function formatResourceNames(names) {
  const formattedNames = []
  const capitalize = str => `${str.substr(0, 1).toUpperCase()}${str.substr(1)}`
  for (const index in names) {
    formattedNames.push([index.substr(-2, 2), capitalize(names[index])])
  }

  return new Map(formattedNames)
}

export default class ACNHApiResource {
  /**
   * Format raw resource data
   * @param {Object} data
   */
  constructor(data) {
    this.data = data
    this.names = formatResourceNames(data.name)
  }

  /**
   * Returns the resource id
   * @returns {number}
   */
  get id() {
    return this.data['id']
  }

  /**
   * Returns the resource reference
   * @returns {string}
   */
  get reference() {
    return this.data['file-name']
  }

  /**
   * Returns the resource img uri
   * @returns {string}
   */
  get imgUrl() {
    return this.data.image_uri
  }

  /**
   * Returns the resource name in the current locale
   * @returns {string}
   */
  get name() {
    return this.names.get(i18n.locale) || this.names.get(i18n.fallbackLocale)
  }

  /**
   * Returns the resource price
   * @returns {string}
   */
  get price() {
    return this.data.price
  }
}
