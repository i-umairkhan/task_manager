const Task = require("../model/task");
const asyncWrapper = require("../middleware/async");

// async wrapper is a miidleware to remove remove try catch block
// getAllTasks & getTask are wrapped in async wrapper others still use try catch

// controller to get all tasks => With async wrapper
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

// controller to get a specific task => With async wrapper
const getTask = asyncWrapper(async (req, res) => {
  const taskId = req.params.id;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return res.status(404).json({ msg: `No task with id ${taskId}` });
  }
  res.status(200).json({ task });
});

// controller to create a task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// controller to update a task
const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${taskId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// controller to delete a task
const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${taskId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// exports
module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
