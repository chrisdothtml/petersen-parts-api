import dotenv from 'dotenv'

dotenv.load()
let CACHE

/**
 * ENV variable formats
 * MAIL_TO: email@domain.com
 * MAIL_URI: https://user:pass@host:port
 */
function parseMail () {
  const { MAIL_FROM, MAIL_TO, MAIL_URI } = process.env
  let result = {}

  if (MAIL_TO && MAIL_URI) {
    const { hostname, password, port, username } = new URL(MAIL_URI)

    result = {
      fromEmail: MAIL_FROM,
      hostname,
      password,
      port,
      toEmail: MAIL_TO,
      username
    }
  }

  return result
}

/**
 * ENV variable formats
 * ALLOWED_ORIGINS: origin1,origin2
 */
function parseOrigins () {
  return (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .filter(Boolean)
}

export default {
  get () {
    if (!CACHE) {
      CACHE = {
        ...process.env,
        ALLOWED_ORIGINS: parseOrigins(),
        MAIL_CONFIG: parseMail(),
        PORT: process.env.PORT || 1337
      }
    }

    return CACHE
  }
}
