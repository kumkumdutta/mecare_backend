import * as product_controller from '../controller/product.controller.js'
import * as auth_controller from '../controller/auth.controller.js'

export default async function (fastify){
    fastify.post('/add_product',product_controller.create_Product )
    fastify.post('/register', auth_controller.register)
    fastify.post('/login', auth_controller.login)
    fastify.get('/get_product/:category',product_controller.getProduct)
}