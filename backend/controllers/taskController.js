const Task = require('../models/Task');

// Create Task
exports.createTask = async (req, res) => {
    try {
        const { title, description, date, startTime, endTime } = req.body;
        
        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }

        const newTask = new Task({
            title,
            description,
            date: date ? new Date(date) : new Date(),
            startTime,
            endTime
        });

        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ message: "Error creating task", error: error.message });
    }
};

// Delete Task
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);
        
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        
        res.json({ message: "Task deleted successfully", task: deletedTask });
    } catch (error) {
        res.status(500).json({ message: "Error deleting task", error: error.message });
    }
};

// Update Task by ID
exports.updateTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, date, startTime, endTime } = req.body;
        
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { title, description, date: date ? new Date(date) : undefined, startTime, endTime },
            { new: true, runValidators: true }
        );
        
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        
        res.json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: "Error updating task", error: error.message });
    }
};

// Update Task Status (In Progress / Completed)
exports.updateTaskStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        
        if (!['pending', 'in progress', 'completed'].includes(status)) {
            return res.status(400).json({ message: "Invalid status" });
        }
        
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        );
        
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        
        res.json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: "Error updating task status", error: error.message });
    }
};

// Get Tasks by Date
exports.getTasksByDate = async (req, res) => {
    try {
        const { date } = req.query;
        
        if (!date) {
            return res.status(400).json({ message: "Date parameter is required" });
        }
        
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);
        
        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);
        
        const tasks = await Task.find({
            date: {
                $gte: startOfDay,
                $lte: endOfDay
            }
        }).sort({ startTime: 1 });
        
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tasks", error: error.message });
    }
};

// Get Task Count (Completed and Pending)
exports.getTaskCount = async (req, res) => {
    try {
        const completedCount = await Task.countDocuments({ status: 'completed' });
        const pendingCount = await Task.countDocuments({ status: { $ne: 'completed' } });
        const totalCount = await Task.countDocuments();
        
        res.json({
            total: totalCount,
            completed: completedCount,
            pending: pendingCount
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching task count", error: error.message });
    }
};

// Search Tasks by Keywords (title, description)
exports.searchTasks = async (req, res) => {
    try {
        const { keyword } = req.query;
        
        if (!keyword) {
            return res.status(400).json({ message: "Keyword parameter is required" });
        }
        
        const tasks = await Task.find({
            $or: [
                { title: { $regex: keyword, $options: 'i' } },
                { description: { $regex: keyword, $options: 'i' } }
            ]
        }).sort({ date: -1 });
        
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error searching tasks", error: error.message });
    }
};

// const Task = require('../models/Task');

// exports.createTask = async (req, res) => {
//   try {
//     const task = new Task(req.body);
//     await task.save();
//     res.status(201).json(task);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.getAllTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find({}).sort({ date: 1 });
//     res.json(tasks);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getTasksByWeek = async (req, res) => {
//   try {
//     const { startDate, endDate } = req.query;
//     const tasks = await Task.find({
//       date: {
//         $gte: new Date(startDate),
//         $lte: new Date(endDate)
//       }
//     }).sort({ date: 1 });

//     const weekSummary = {
//       totalTasks: tasks.length,
//       openTasks: tasks.filter(task => task.status !== 'Completed').length,
//       completedTasks: tasks.filter(task => task.status === 'Completed').length,
//       tasks: tasks
//     };

//     res.json(weekSummary);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.updateTask = async (req, res) => {
//   try {
//     const task = await Task.findByIdAndUpdate(
//       req.params.id, 
//       req.body, 
//       { new: true, runValidators: true }
//     );
//     if (!task) {
//       return res.status(404).json({ message: 'Task not found' });
//     }
//     res.json(task);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.deleteTask = async (req, res) => {
//   try {
//     const task = await Task.findByIdAndDelete(req.params.id);
//     if (!task) {
//       return res.status(404).json({ message: 'Task not found' });
//     }
//     res.json({ message: 'Task deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.searchTasks = async (req, res) => {
//   try {
//     const { query } = req.query;
//     const tasks = await Task.find({
//       $or: [
//         { title: { $regex: query, $options: 'i' } },
//         { description: { $regex: query, $options: 'i' } }
//       ]
//     });
//     res.json(tasks);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };