const { Router } = require('express')

const DoacoesController = require('./controllers/DoacoesController')
const UsersController = require('./controllers/UsersController')
const SerachController = require('./controllers/SearchController')

const routes = Router()

routes.get('/doacoes', DoacoesController.index)
routes.post('/doacoes', DoacoesController.store)

routes.get('/search', SerachController.index)

routes.post('/users', UsersController.store)

routes.get('/shazam', (req, res) => {
    console.log('shazam')

    res.json([{ name: "kakashi", id: 'aa1' }, { name: "guy", id: 'aa2' }])
})


//@arthurc_bot
module.exports = routes