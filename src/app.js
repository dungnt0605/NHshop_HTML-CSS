import express from "express";
import cors from "cors";
import { connectDB } from "./config/connect.js";
import dotenv from "dotenv";
import morgan from "morgan";
import auth from "./routers/auth.js";
import router from "./routers/product.js";
import category from "./routers/category.js";
import cart from "./routers/cart.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
// connect db
connectDB(process.env.DB_URI);
app.use("/api/v1", auth);
app.use("/api/v1", router);
app.use("/api/v1", category);
app.use("/api/v1", cart);

app.listen(5170, () => {
  console.log("connected");
});

export const viteNodeApp = app;
