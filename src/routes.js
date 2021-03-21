const { Router } = require('express')
const UserController = require('./controllers/UserController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

routes.post('/user', UserController.store)
routes.get('/users', UserController.index)

routes.get('/search', SearchController.index)

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello Teste' })
})

module.exports = routes