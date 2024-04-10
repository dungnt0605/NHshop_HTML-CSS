import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: "string",
    },
    slug: {
      type: "string",
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("Category", categorySchema);
