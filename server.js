const PORT = 11333
const express = require(`express`)
const app = express()
const cors = require(`cors`)
const bodyParser = require(`body-parser`)
app.use(cors())
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const adminRoute = require('./routes/admin.route')
const menuRoute = require('./routes/menu.route')
const orderRoute = require('./routes/transaksi.route')

app.use(`/admin`, adminRoute)
app.use(`/coffe`, menuRoute)
app.use(`/order`, orderRoute)

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})