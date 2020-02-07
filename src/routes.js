const { Router } = require('express')

const productController = require('../src/app/controllers/ProductController')

const routes = new Router()

routes.post('/products', productController.store)
routes.get('/products', productController.index)

module.exports = routes

