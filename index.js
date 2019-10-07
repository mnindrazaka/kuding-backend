const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('codequest backend')
})

app.post('/', (req, res) => {
  const result = eval(req.body.script)
  res.json(result)
})

app.listen(3000, () => console.log('server running'))
