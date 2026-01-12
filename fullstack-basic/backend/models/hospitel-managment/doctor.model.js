import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    worksInHospitels: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospitel",
      },
    ],

    yearsOfExperience: {
      type: String,
      default: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
