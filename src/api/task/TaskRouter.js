const router = require('express').Router()
const TaskController = require('./TaskController')
const verifyToken = require('../../lib/verifyToken')

router.get('/', verifyToken, TaskController.index)
router.get('/:id', verifyToken, TaskController.show)
router.post('/', verifyToken, TaskController.store)
router.put('/:id', verifyToken, TaskController.update)
router.delete('/:id', verifyToken, TaskController.destroy)
router.post('/:id/submit', verifyToken, TaskController.submit)
module.exports = router
