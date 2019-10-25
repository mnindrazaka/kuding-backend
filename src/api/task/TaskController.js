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
  }
}
