const { Router } = require('express')
const UserController = require('./controllers/UserController')

const routes = Router()

routes.post('/user', UserController.store)

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello Teste' })
})

module.exports = routes