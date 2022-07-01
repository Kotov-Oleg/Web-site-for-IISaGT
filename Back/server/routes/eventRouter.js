const Router = require('express')
const router = new Router()
const EventController = require('../controllers/eventController')

router.post('/', EventController.create)
router.get('/', EventController.getAll)

router.get('/:id',)


module.exports = router