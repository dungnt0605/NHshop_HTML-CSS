import express from "express";
import {
  RelatedProduct,
  create,
  get,
  getId,
  remove,
  update,
} from "../controllers/product.js";

const router = express.Router();

router.get("/product", get);
router.post("/product", create);
router.get("/product/:slug", getId);
router.get("/product/:id/related", RelatedProduct);
router.put("/product/:slug", update);
router.delete("/product/:slug", remove);

export default router;
