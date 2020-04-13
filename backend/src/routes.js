const { Router } = require('express')

const DonationsController = require('./controllers/DonationsController')
const UsersController = require('./controllers/UsersController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

routes.get('/donations', DonationsController.index)
routes.get('/donations/:id', DonationsController.show)
routes.post('/donations', DonationsController.store)

routes.get('/search', SearchController.index)

routes.post('/users', UsersController.store)

routes.get('/shazam', (req, res) => {
    res.json([{ name: "kakashi", id: 'aa1' }, { name: "guy", id: 'aa2' }])
})

//@arthurc_bot
module.exports = routes