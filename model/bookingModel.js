import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    patientName: String,
    phone: String,
    email: String,
    date: String,
    appointment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
      required: true,
    },
  },
  { timestamps: true }
);

export const Booking = mongoose.model("Booking", bookingSchema);
