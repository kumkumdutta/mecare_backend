import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
    {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    
    product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true
    },
    quantity: {
          type: Number,
          required: true,
          min: 1,
          default: 1
        }
      
    
  },
  { timestamps: true }
)

export {cartSchema}