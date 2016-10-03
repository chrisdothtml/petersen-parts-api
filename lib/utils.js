'use strict'

/**
 * Converts properties in a data object to query-
 * string format
 */
function buildQueryString (data) {
  var result = ''

  for (let key in data) {
    if (!data.hasOwnProperty(key)) continue

    let value = data[key]

    // separator
    if (result.length) result += '&'

    key = encodeURIComponent(key)
    value = encodeURIComponent(value)
    result += `${key}=${value}`
  }

  return result
}

module.exports = {
  buildQueryString
}
