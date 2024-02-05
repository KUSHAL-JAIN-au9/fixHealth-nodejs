import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  doctor: String,
  date: String,
  time: Array,
  img: String,
  specialties: String,
  city: String,
  slots: Array,
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);
