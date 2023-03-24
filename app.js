const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/notFound");
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(notFound); // middleware for not found error

// Routes
app.use("/api/v1/tasks", tasks); // get all tasks

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
