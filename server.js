import fastify from "fastify";
import dotenv from "dotenv";
import { connection } from "./config/db.js";
import * as productRoutes from './routes/product.routes.js';
import * as authRoutes from './routes/auth.routes.js';
import cors from "@fastify/cors";

dotenv.config()

const Fastify = fastify({
    logger :true
})

await Fastify.register(cors, {
  origin: "*", // Change to specific domain in production
  credentials: true,
});

Fastify.register(productRoutes, { prefix: '/mecare' });
Fastify.register(authRoutes, { prefix: '/mecare/auth' });




Fastify.listen({port:process.env.Port, host:"0.0.0.0"},async()=>{
    try {
        await connection
        console.log("databse connected successfully")
        
    } catch (error) {
        console.log(error)
    }
    console.log(`server is running on port ${process.env.Port}`)
})