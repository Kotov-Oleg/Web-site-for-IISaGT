// собрать все роутеры вместе (пока только event, но тут можно дальше спокойно расширять)
const Router = require('express')
const router = new Router()
const eventRouter = require('./eventRouter') // импортируем роутер для его использования

router.use('/event', eventRouter) // указываем что будет обрабатываться в этом роутере 

module.exports = router

// все можно было в одном файле сделать, но так вроде проще масштабировать