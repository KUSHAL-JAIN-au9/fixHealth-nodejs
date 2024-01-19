import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  img: String,
  name: String,
  specialties: String,
  city: String,
});

export const Doctor = mongoose.model("Doctor", doctorSchema);
