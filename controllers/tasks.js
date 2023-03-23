const Task = require("../model/task");

const getAllTasks = (req, res) => {
  res.send("all tasks");
};

const getTask = (req, res) => {
  res.send("a task");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = (req, res) => {
  res.send("Task updated");
};

const deleteTask = (req, res) => {
  res.send("task deleted");
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
