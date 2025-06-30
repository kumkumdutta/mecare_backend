import mongoose from "mongoose";
import { productSchema } from "../Schemas/product.schema.js";

const productModel = mongoose.model("Product",productSchema)

export {
    productModel
}