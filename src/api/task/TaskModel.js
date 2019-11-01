const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  test_cases: [
    {
      input: String,
      expected_output: String
    }
  ]
})

module.exports = mongoose.model('Task', taskSchema)
