import mongoose from "mongoose";

const hospitelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
    },
    postelCode: {
      type: String,
      required: true,
    },
    specializedIn: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);
