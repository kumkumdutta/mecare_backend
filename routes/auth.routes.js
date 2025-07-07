import * as auth_controller from '../controller/auth.controller.js'

export default async function (fastify){
    fastify.post('/register', auth_controller.register)
    
    fastify.post('/login', auth_controller.login)
}