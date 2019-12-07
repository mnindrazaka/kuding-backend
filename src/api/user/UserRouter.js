const router = require('express').Router()
const UserController = require('./UserController')
const verifyToken = require('../../lib/verifyToken')

router.get('/', verifyToken, UserController.index)
router.get('/:id', verifyToken, UserController.show)
router.post('/', UserController.store)
router.put('/:id', verifyToken, UserController.update)
router.delete('/:id', verifyToken, UserController.destroy)
router.post('/login', UserController.login)
module.exports = router
