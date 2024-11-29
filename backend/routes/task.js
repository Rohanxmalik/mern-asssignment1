// const express = require("express");
// const router = express.Router();
// const {
//     createTask,
//     deleteTask,
//     updateTaskById,
//     updateTaskStatus,
//     getTasksByDate,
//     getTaskCount,
//     searchTasks,
// } = require("../controllers/taskController");

// // Create Task
// router.post("/", createTask);

// // Delete Task
// router.delete("/:id", deleteTask);

// // Update Task by ID
// router.put("/:id", updateTaskById);

// // Update Task Status (In Progress / Completed)
// router.put("/status/:id", updateTaskStatus);

// // Get Tasks by Date
// router.get("/date", getTasksByDate);

// // Get Task Count (Completed and Pending)
// router.get("/count", getTaskCount);

// // Search Tasks by Keywords (title, description)
// router.get("/search", searchTasks);

// module.exports = router;

const express = require("express");
const router = express.Router();
const {
  createTask,
  deleteTask,
  updateTaskById,
  updateTaskStatus,
  getTasksByDate,
  getTaskCount,
  searchTasks,
} = require("../controllers/taskController");

// Create Task
router.post("/", createTask);

// Delete Task
router.delete("/:id", deleteTask);

// Update Task by ID
router.put("/:id", updateTaskById);

// Update Task Status (In Progress / Completed)
router.put("/status/:id", updateTaskStatus);

// Get Tasks by Date
router.get("/date", getTasksByDate);

// Get Task Count (Completed and Pending)
router.get("/count", getTaskCount);

// Search Tasks by Keywords (title, description)
router.get("/search", searchTasks);

module.exports = router;
