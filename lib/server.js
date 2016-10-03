'use strict'

// get environment vars from .env for development
require('dotenv').load()

const bodyParser = require('body-parser')
const cors = require('cors')
const env = require('./env.js')
const express = require('express')
const mailer = require('express-mailer')
const sanitize = require('express-sanitizer')
const sendEmail = require('./send-email.js')
// const utils = require('./utils.js')
const app = express()

// configure server
{
  const options = {
    bodyParser: {
      extended: true
    },
    cors: {
      origin: env.origins
    },
    mailer: {
      auth: {
        user: env.mail.user,
        pass: env.mail.pass
      },
      from: 'mailer@shopify.com',
      host: env.mail.host,
      port: env.mail.port,
      secureConnection: true,
      transportMethod: 'SMTP'
    }
  }

  app.set('port', env.port)
  app.set('view engine', 'ejs')
  app.set('views', './templates')

  app.use(cors(options.cors))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded(options.bodyParser))
  app.use(sanitize())

  mailer.extend(app, options.mailer)
}

// /sendEmail
app.post('/sendEmail', (request, response) => {
  const params = request.body

  console.log('request from:')
  console.log(request.get('origin'))

  sendEmail(request, params, error => {
    const data = {
      success: !error
    }
    // var query

    // add error
    if (error) data.error = error

    response.json(data)
    // query = utils.buildQueryString(data)
    // response.redirect(`/?${query}`)
  })
})

// 404
app.use(function (request, response) {
  response.status(404).send('404: Page not found')
})

app.listen(env.port, () => {
  console.log(`listening on port ${env.port}`)
})
