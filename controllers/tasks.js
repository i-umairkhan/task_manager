const getAllTasks = (req, res) => {
  res.send("all tasks");
};

const getTask = (req, res) => {
  res.send("a task");
};

const createTask = (req, res) => {
  res.send("task created");
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
