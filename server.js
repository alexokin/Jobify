import express from "express";
import "express-async-errors";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

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

app.use(cors());
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

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
