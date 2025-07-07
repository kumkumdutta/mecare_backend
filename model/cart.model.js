import mongoose from "mongoose";
import { cartSchema } from "../Schemas/cart.schema.js";


const Cart = mongoose.model("Cart", cartSchema)

export {Cart}