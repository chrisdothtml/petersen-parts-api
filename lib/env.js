'use strict'

const URI = require('urijs')

/**
 * Resolves config object for mail server
 * Format: https://user:pass@host:port
 *
 * @returns {object}
 */
function resolveMail () {
  const mail = process.env.MAIL_URI || ''
  const mailto = process.env.MAIL_TO || ''
  const uri = new URI(mail)

  return {
    host: uri.hostname(),
    pass: uri.password(),
    port: uri.port(),
    to: mailto,
    user: uri.username()
  }
}

/**
 * Resolves array of allowed origins
 * Format: origin1,origin2
 *
 * @returns {array}
 */
function resolveOrigins () {
  const origins = process.env.ALLOWED_ORIGINS || ''

  return origins
    .split(',')
    .filter(origin => {
      return !!origin
    })
}

module.exports = {
  mail: resolveMail(),
  origins: resolveOrigins(),
  port: process.env.PORT || 1337
}
