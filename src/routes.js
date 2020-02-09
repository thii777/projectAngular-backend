const { Router } = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')

const productController = require('../src/app/controllers/ProductController')

const routes = new Router()
const upload = multer(multerConfig);

routes.post('/products', upload.single('image'), productController.store)
routes.get('/products', productController.index)

module.exports = routes

