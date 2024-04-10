import express from "express";
import {
  addItemToCart,
  getCartByUserId,
  removeToCart,
  updateProductQuantity,
} from "../controllers/cart.js";

const cart = express.Router();

cart.get("/cart/:userId", getCartByUserId);
cart.post("/cart/add-to-cart", addItemToCart);
cart.put("/cart/update-product-quantity", updateProductQuantity);
cart.delete("/cart/remove", removeToCart);

export default cart;
