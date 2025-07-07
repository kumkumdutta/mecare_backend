import * as product_controller from '../controller/product.controller.js'
import { authenticate } from '../middleware/auth.middleware.js'

export default async function (fastify){
    fastify.addHook('preHandler', authenticate)
    fastify.post('/add_product',product_controller.create_Product )
    fastify.get('/get_product_by_category/:category',product_controller.getProductbyCategory)
    fastify.get('/search_by_product_name',product_controller.searchByProductName)
    fastify.post('/add_to_cart',product_controller.add_to_cart)
    fastify.post('/add_to_wishlist',product_controller.add_to_wishlist)
}