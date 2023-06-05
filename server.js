import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

import connectDB from "./db/connect.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
    } catch (error) {
        console.log(error);
    }
}

start()