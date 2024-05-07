const express = require('express')
const app = express()
const control = require('../controllers/admin.controller')

app.use(express.json())
app.post("/auth",control.Login)
module.exports = app