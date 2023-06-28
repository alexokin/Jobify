import express from "express";
import "express-async-errors";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import cookieParser from "cookie-parser";

import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";

const app = express();
dotenv.config();

// db and authenticate user
import connectDB from "./db/connect.js";

//routers
import authRouter from "./api/auth/auth.routes.js";
import jobsRouter from "./api/jobs/jobs.routes.js";
// middleware
import notFoundMiddleware from "./middleware/notFound.middleware.js";
import errorHandlerMiddleware from "./middleware/errorHandler.middleware.js";
import authenticateUser from "./middleware/auth.js";

app.use(cors());
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, "./client/dist")));
app.use(express.json())
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())
app.use(cookieParser())

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
  } catch (error) {
    console.log(error);
  }
};

start();
