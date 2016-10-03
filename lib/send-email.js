'use strict'

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
      to: 'chrisdothtml@gmail.com',
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
