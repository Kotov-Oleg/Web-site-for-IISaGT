const Router = require('express')
const router = new Router()
const EventController = require('../controllers/eventController')

router.post('/', EventController.create) // добавление записи в бд
router.get('/all', EventController.getAll) // получение всех записей из бд


// тестовые роутеры ----------------------------------
router.get('/working', (req, res) => {
  res.json({message: 'ALL WORKING'})
})
router.get('/:id',)
router.get('/', EventController.test)
// ---------------------------------------------------

module.exports = router