import mongoose from "mongoose";
import { wishlistItemSchema } from "../Schemas/wishlist.schema.js";

const Wishlist = mongoose.model("Wishlist",wishlistItemSchema)

export {
    Wishlist
}