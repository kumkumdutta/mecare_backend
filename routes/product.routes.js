import * as product_controller from '../controller/product.controller.js'

export default async function (fastify){
    fastify.post('/add_product',product_controller.create_Product )
}