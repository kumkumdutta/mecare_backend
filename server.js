import fastify from "fastify";
import dotenv from "dotenv";
import { connection } from "./config/db.js";
import * as productRoutes from './routes/product.routes.js';
import * as authRoutes from './routes/auth.routes.js';

dotenv.config()

const Fastify = fastify({
    logger :true
})

Fastify.register(productRoutes, { prefix: '/mecare' });
Fastify.register(authRoutes, { prefix: '/mecare/auth' });




Fastify.listen({port:process.env.Port},async()=>{
    try {
        await connection
        console.log("databse connected successfully")
        
    } catch (error) {
        console.log(error)
    }
    console.log(`server is running on port ${process.env.Port}`)
})