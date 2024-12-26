import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

//! the database connection

connectDB();

app.get("/", (re, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
