const { Router } = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')

const productController = require('../src/app/controllers/ProductController')

const routes = new Router()
const upload = multer(multerConfig);

routes.post('/products', upload.single('image'), productController.store)
routes.get('/products', productController.show)
routes.get('/products/:projectId', productController.index)
routes.put('/products/:projectId', upload.single('image'), productController.update)
routes.delete('/products/:projectId', productController.delete)

module.exports = routes

