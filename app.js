const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandel");
require("dotenv").config();

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1/tasks", tasks); // get all tasks
app.use(notFound); // middleware for not found errors
app.use(errorHandler); // middleware to handle errors

// server & db connection
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    const port = 3000;
    app.listen(port, function () {
      console.log(`Express server listening on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
