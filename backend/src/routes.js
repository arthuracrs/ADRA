const { Router } = require('express')

const DoacoesController = require('./controllers/DoacoesController')
const UsersController = require('./controllers/UsersController')

const routes = Router()

routes.get('/doacoes', DoacoesController.index)
routes.post('/doacoes', DoacoesController.store)

routes.post('/users', UsersController.store)
//@arthurc_bot
module.exports = routes