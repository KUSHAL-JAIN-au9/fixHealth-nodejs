import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    doctor: String,
    date: String,
    time: Array,
    img: String,
    specialties: String,
    city: String,
    slots: Array,
    isAllocated: {
      type: Boolean,
      default: false,
      timestamps: true,
    },
  },
  { timestamps: true }
);

export const Appointment = mongoose.model("Appointment", appointmentSchema);
