const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./config/router')
require('./config/db')

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('kuding backend')
})

app.use(router)

app.listen(process.env.PORT || 3000, () => console.log('server running'))
