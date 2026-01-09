import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema(
  {
    content: {},
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    complete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export const subTodo = mongoose.model("subTodo", subTodoSchema);
