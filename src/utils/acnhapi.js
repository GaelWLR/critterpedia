/**
 * Format name object into a Map
 * @param {Object} names
 * @returns {Map}
 */
function formatResourceNames(names) {
  const formattedNames = []
  for (const index in names) {
    formattedNames.push([index.substr(-2, 2), names[index]])
  }

  return new Map(formattedNames)
}

export { formatResourceNames }
