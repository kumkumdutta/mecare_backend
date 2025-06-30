import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

let connection = mongoose.connect(process.env.MongoURL)

export {
    connection
}