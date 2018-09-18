import env from './env.js'
import moment from 'moment'
import nodemailer from 'nodemailer'
import templates from './templates.js'
import { promisify } from 'util'

const { MAIL_CONFIG } = env.get()
const VALID_TYPES = ['contact']
const MAIL_TRANSPORTER = nodemailer.createTransport({
  host: MAIL_CONFIG.hostname,
  port: MAIL_CONFIG.port,
  secure: false,
  auth: {
    user: MAIL_CONFIG.username,
    pass: MAIL_CONFIG.password
  }
})

function generateTimestamp () {
  const now = moment()
  const date = now.format('MMMM Do, YYYY')
  const time = now.format('h:mm A')

  return `${date} at ${time}`
}

// gets greeting and subject based on email type
function getTypeData (type) {
  switch (type) {
    case 'contact':
      return {
        greeting: `You received a new message from your online store's contact form.`,
        subject: `New customer message on ${generateTimestamp()}`
      }
  }
}

export default async function (data) {
  const { type } = data
  let success

  if (VALID_TYPES.includes(type)) {
    const { fromEmail, toEmail } = MAIL_CONFIG
    const sendMail = promisify(MAIL_TRANSPORTER.sendMail.bind(MAIL_TRANSPORTER))

    Object.assign(data, getTypeData(type))
    success = await sendMail({
      from: fromEmail,
      html: templates.htmlEmail(data),
      subject: data.subject,
      text: templates.textEmail(data),
      to: toEmail
    })
  } else {
    success = false
  }

  return success
}
