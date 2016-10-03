'use strict'

const env = require('./env.js')

/**
 * @returns {boolean}
 */
function paramsValid (params) {
  return false
}

/**
 * Checks the provided parameters and sends the
 * email
 */
function send (request, params, callback) {
  // invalid params
  if (!paramsValid(params)) {
    callback('invalid params')
  } else {
    let data = {
      to: env.mail.to,
      subject: 'Test Email',
      form_data: params
    }

    // send email
    request.app.mailer.send('become-dealer', data, error => {
      if (error) error = 'unknown'

      callback(error)
    })
  }
}

module.exports = send
