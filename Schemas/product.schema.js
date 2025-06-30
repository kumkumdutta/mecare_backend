import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["massage chair", "massage gun", "eye"],
    },
    description: {
      type: String,
      default: "",
    },
    externalLink: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);


export {
    productSchema
}