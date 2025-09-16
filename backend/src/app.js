import express from "express";
import "dotenv/config";
import skillRoutes from "./routes/skillRoutes.js";

const app = express();

app.use(express.json());

// Routes
app.use("/skills", skillRoutes);

export default app;
