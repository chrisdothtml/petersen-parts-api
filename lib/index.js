import cors from 'cors'
import env from './env.js'
import express, { Router } from 'express'
import formData from 'express-form-data'
import sendEmail from './send-email.js'

const { ALLOWED_ORIGINS, PORT } = env.get()
const router = new Router()
const server = express()

router.post('/sendEmail', async (req, res) => {
  const errors = []
  let success

  try {
    success = !!(await sendEmail(req.body))
  } catch (error) {
    success = false
    errors.push('failed to send email')
    console.error(error)
  }

  res.json({ errors, success })
})

server.use(cors({ origin: ALLOWED_ORIGINS }))
server.use(formData.parse())
server.use(router)
server.use((req, res) => {
  res
    .status(404)
    .json({ errors: ['404 not found'] })
})

server.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
)
