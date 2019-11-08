const router = require('express').Router()

router.use('/task', require('../api/task/TaskRouter'))
router.use('/user', require('../api/user/UserRouter'))
module.exports = router
