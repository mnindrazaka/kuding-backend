const TaskModel = require('./TaskModel')

module.exports = {
  index: function(req, res) {
    TaskModel.find().then(function(rows) {
      res.send(rows)
    })
  },

  show: function(req, res) {
    TaskModel.findById(req.params.id).then(function(row) {
      res.send(row)
    })
  },

  store: function(req, res) {
    TaskModel.create(req.body).then(function(row) {
      res.send(row)
    })
  },

  update: function(req, res) {
    TaskModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    ).then(function(row) {
      res.send(row)
    })
  },

  destroy: function(req, res) {
    TaskModel.findOneAndDelete({ _id: req.params.id }).then(function(row) {
      res.send(row)
    })
  },

  submit: function(req, res) {
    let { script } = req.body

    TaskModel.findById(req.params.id).then(function(row) {
      console.log(row)
      res.json(
        row.test_cases.map(test_case => {
          const output = eval(script + ` kuding(${test_case.input})`)
          return {
            input: test_case.input,
            expected_output: test_case.expected_output,
            output: JSON.stringify(output)
          }
        })
      )
    })
  }
}
