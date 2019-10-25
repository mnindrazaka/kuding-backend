const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./config/router')
require('./config/db')

const problems = [
  { input: 5, expected_output: 25 },
  { input: 10, expected_output: 100 },
  { input: 2, expected_output: 4 },
  { input: 6, expected_output: 36 }
]

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('codequest backend')
})

app.post('/', (req, res) => {
  let { script } = req.body

  res.json(
    problems.map(problem => {
      const output = eval(script + ` power(${problem.input})`)
      return {
        ...problem,
        output
      }
    })
  )
})

app.use(router)

app.listen(process.env.PORT || 3000, () => console.log('server running'))
