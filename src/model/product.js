import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    //iphone 12 pro => iphone-12-pro
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
    },
    gallery: {
      type: Array,
    },

    description: {
      type: String,
    },
    discount: {
      type: Number,
      default: 0,
    },
    countInSlock: {
      type: Number,
    },
    featured: {
      type: Boolean,
    },
    tags: {
      type: Array,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Product = mongoose.model("Product", productSchema);
