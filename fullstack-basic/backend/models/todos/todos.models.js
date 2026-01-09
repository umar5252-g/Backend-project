import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    creatBy: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
