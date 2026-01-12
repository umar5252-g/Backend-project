import mongoose from "mongoose";

const patiendSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    diagnossedWith: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

export const Patiend = mongoose.model("Patiend", patiendSchema);
