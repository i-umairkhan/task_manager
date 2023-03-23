const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

// Middleware
app.use(express.json());

// Routes
app.get("/hello", (req, res) => {
  res.send("hello");
});

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
