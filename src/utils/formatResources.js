/**
 * Format name object into a Map
 * @param {Object.<string, string>} names
 * @returns {Map<string, string>}
 */
function formatNames(names) {
  const formattedNames = []
  const capitalize = str => `${str.substr(0, 1).toUpperCase()}${str.substr(1)}`
  for (const index in names) {
    formattedNames.push([index.substr(-2, 2), capitalize(names[index])])
  }

  return new Map(formattedNames)
}

/**
 * Format months from string to an array of available months
 * @param {string} rawMonths
 * @param {boolean} [isAllYear=false]
 * @returns {number[]}
 */
function formatMonths(rawMonths, isAllYear = false) {
  const months = []

  if (isAllYear) {
    for (let i = 1; i <= 12; i++) {
      months.push(i)
    }
  } else {
    for (const period of rawMonths.split(' & ')) {
      const [startMonth, endMonth] = period.split('-').map(value => parseInt(value))

      if (startMonth < endMonth) {
        for (let i = startMonth; i <= endMonth; i++) {
          months.push(i)
        }
      } else {
        for (let i = 1; i <= endMonth; i++) {
          months.push(i)
        }
        for (let i = startMonth; i <= 12; i++) {
          months.push(i)
        }
      }
    }
  }

  return months
}

/**
 * Format hours from string to an array of available hours
 * @param {string} rawHours
 * @param {boolean} [isAllYear=false]
 * @returns {number[]}
 */
function formatHours(rawHours, isAllDay = false) {
  const hours = []

  if (isAllDay) {
    for (let i = 1; i <= 24; i++) {
      hours.push(i)
    }
  } else {
    for (const period of rawHours.split(' & ')) {
      const [startHour, endHour] = period
        .split(' - ')
        .map(value => (value.substr(-2) == 'pm' ? parseInt(value) + 12 : parseInt(value)))

      if (startHour < endHour) {
        for (let i = startHour; i <= endHour; i++) {
          hours.push(i)
        }
      } else {
        for (let i = 1; i <= endHour; i++) {
          hours.push(i)
        }
        for (let i = startHour; i <= 24; i++) {
          hours.push(i)
        }
      }
    }
  }

  return hours
}

/**
 * Format string to make it a key for i18n
 * @param {string} string
 * @returns {string}
 */
function formatStringToTranslate(string) {
  return string
    .replace(/ /g, '_')
    .replace(/\(|\)/g, '')
    .toLowerCase()
}

export { formatNames, formatHours, formatMonths, formatStringToTranslate }
