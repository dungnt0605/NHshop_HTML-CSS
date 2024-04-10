import express from "express";
import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      unique: true,
      minlength: 8,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },

    avatar: {
      type: String,
      default:
        "https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export const User = mongoose.model("User", userSchema);
