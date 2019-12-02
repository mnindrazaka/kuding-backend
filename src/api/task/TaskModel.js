const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  test_cases: [
    {
      input: String,
      expected_output: String
    }
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('Task', taskSchema)
