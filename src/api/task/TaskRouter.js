const router = require('express').Router()
const TaskController = require('./TaskController')

router.get('/', TaskController.index)
router.get('/:id', TaskController.show)
router.post('/', TaskController.store)
router.put('/:id', TaskController.update)
router.delete('/:id', TaskController.destroy)
module.exports = router
