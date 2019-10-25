const router = require('express').Router()

router.use('/task', require('../api/task/TaskRouter'))
module.exports = router
