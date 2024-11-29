require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const task = require("./routes/task");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Routes
app.use("/api/tasks", task);

// Connect to the database
connectDB();

// app.get("/", (req, res) => {
//     res.send("To-Do List API");
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.log('MongoDB connection error:', err));

// // Define routes
// app.use('/api/tasks', require('./routes/tasks'));

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
