const express = require(`express`)
const app = express()
const auth = require('../auth/auth')
const control = require('../controllers/order.controller')

app.post('/', control.order)
app.get('/history', auth.authVerify, control.orderHistory)

module.exports = app