import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import doctorsData from "./fixHealth.doctors.json";
import db from "./config/mongoose.js";
import { Doctor } from "./model/doctorsModel.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/doctors", async (req, res) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const data = await Doctor.find({});
    return res.json(data);
  } catch (error) {
    throw new Error(error.message);
  }
});

app.get("/api/doctors/:id", async (req, res) => {
  const doctorId = req.params.id;

  try {
    // Find the doctor by ID
    const doctor = await Doctor.findById(doctorId);
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (!doctor) {
      // If the doctor is not found, send a 404 Not Found response
      return res.status(404).json({ error: "Doctor not found" });
    }

    // If the doctor is found, send it as JSON in the response
    res.json(doctor);
  } catch (error) {
    // Handle errors (e.g., database error)
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, async (err) => {
  if (err) {
    console.log("Server is not running!!");
  }

  //   console.log(db.collections);
  console.log(`Server is listening on ${PORT}`);
});
