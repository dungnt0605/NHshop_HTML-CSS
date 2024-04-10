import mongoose from "mongoose";

export const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log(`Connected to DB :  ${url}`);
  } catch (error) {
    console.log(`Error connecting : ${error.message}`);
  }
};
