import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.route.js";
import programRoutes from "./routes/program.route.js";
import eventRoutes from "./routes/event.route.js";
import newsRoutes from "./routes/news.route.js";
import directorateRoutes from "./routes/directorate.routes.js"; 
import jobRoutes from "./routes/jobs.route.js";
import applicationRoutes from "./routes/applications.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Serve uploaded files
app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));

app.use("/api/auth", authRoutes);
app.use("/api/programs", programRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/directorate", directorateRoutes); 
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
