import express from "express";
import { create, get, getId, remove, update } from "../controllers/category";

const category = express.Router();

category.get("/category", get);
category.post("/category", create);
category.get("/category/:id", getId);
category.put("/category/:id", update);
category.get("/category/:id", remove);

export default category;
