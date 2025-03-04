import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.route.js";

const port = process.env.PORT || 3000;
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
