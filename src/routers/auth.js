import express from "express";
import { SignIn } from "../controllers/signin.js";
import { signup } from "../controllers/signup.js";
const auth = express.Router();

auth.post("/auth/signup", signup);
auth.post("/auth/signin", SignIn);
export default auth;
