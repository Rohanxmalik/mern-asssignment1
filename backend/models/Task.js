// const mongoose = require("mongoose");

// const taskSchema = mongoose.Schema(
//     {
//         title: {
//             type: String,
//             required: true,
//         },
//         startTime: {
//             type: Date,
//             required: true,
//         },
//         endTime: {
//             type: Date,
//             required: true,
//         },
//         description: {
//             type: String,
//             required: true,
//         },
//         status: {
//             type: String,
//             enum: ["In Progress", "Completed", "Pending"],
//             default: "Pending",
//         },
//         priority: {
//             type: String,
//             enum: ["Low", "Medium", "High"],
//             default: "Medium",
//         },
//     },
//     { timestamps: true }
// );

// const Task = mongoose.model("Task", taskSchema);

// module.exports = Task;
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium'
  },
  status: {
    type: String,
    enum: ['Open', 'In Progress', 'Completed'],
    default: 'Open'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Method to get the week start date
TaskSchema.methods.getWeekStart = function() {
  const taskDate = new Date(this.date);
  const day = taskDate.getDay();
  const diff = taskDate.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(taskDate.setDate(diff));
};

module.exports = mongoose.model('Task', TaskSchema);