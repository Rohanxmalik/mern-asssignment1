// "use client";

// import React, { useState } from "react";
// import { Trash2, Edit, Plus, X } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// const TaskManagement = () => {
//   const [tasks, setTasks] = useState([
//     { id: 1, title: "Finishing Wireframe", completed: false },
//     { id: 2, title: "Meeting with team", completed: false },
//     { id: 3, title: "Buy a cat food", completed: true },
//     { id: 4, title: "Finishing daily commission", completed: true },
//   ]);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newTask, setNewTask] = useState({
//     title: "",
//     date: "",
//     description: "",
//     startTime: "",
//     endTime: "",
//   });

//   const toggleTaskCompletion = (taskId: Number) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === taskId ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const deleteTask = (taskId: Number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleNewTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const newTaskItem = {
//       id: tasks.length + 1,
//       title: newTask.title,
//       completed: false,
//     };
//     setTasks([...tasks, newTaskItem]);
//     setNewTask({
//       title: "",
//       date: "",
//       description: "",
//       startTime: "",
//       endTime: "",
//     });
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="max-w-md py-4 flex-1">
//       {/* Tasks Today Section */}
//       <div className="my-4 h-full">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-semibold">Tasks Today</h2>
//           <button className="text-blue-600 text-sm">View All</button>
//         </div>

//         {/* Task List */}
//         <div className="space-y-3">
//           {tasks.map((task) => (
//             <div key={task.id} className="flex items-center gap-3 py-3">
//               <input
//                 type="checkbox"
//                 checked={task.completed}
//                 onChange={() => toggleTaskCompletion(task.id)}
//                 className="w-4 h-4 rounded border-gray-300"
//               />
//               <span
//                 className={`flex-1 ${
//                   task.completed ? "line-through text-gray-500" : ""
//                 }`}
//               >
//                 {task.title}
//               </span>
//               <button
//                 onClick={() => deleteTask(task.id)}
//                 className="p-1 text-gray-400 hover:text-gray-600"
//               >
//                 <Trash2 size={16} />
//               </button>
//               <button className="p-1 text-gray-400 hover:text-gray-600">
//                 <Edit size={16} />
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Add Task Button */}
//         <div className="absolute bottom-[32px] inset-x-0">
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="mt-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors mx-auto"
//           >
//             <Plus size={24} />
//           </button>
//         </div>
//       </div>

//       {/* Add Task Modal */}
//       <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle>Add New Task</DialogTitle>
//           </DialogHeader>
//           <form onSubmit={handleNewTaskSubmit} className="space-y-4">
//             <div>
//               <label className="text-sm text-gray-600">Task title</label>
//               <Input
//                 value={newTask.title}
//                 onChange={(e) =>
//                   setNewTask({ ...newTask, title: e.target.value })
//                 }
//                 placeholder="Enter task title"
//                 className="w-full mt-1"
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="text-sm text-gray-600">Start Time</label>
//                 <Input
//                   type="time"
//                   value={newTask.startTime}
//                   onChange={(e) =>
//                     setNewTask({ ...newTask, startTime: e.target.value })
//                   }
//                   className="w-full mt-1"
//                 />
//               </div>
//               <div>
//                 <label className="text-sm text-gray-600">End Time</label>
//                 <Input
//                   type="time"
//                   value={newTask.endTime}
//                   onChange={(e) =>
//                     setNewTask({ ...newTask, endTime: e.target.value })
//                   }
//                   className="w-full mt-1"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="text-sm text-gray-600">Set Date</label>
//               <Input
//                 type="date"
//                 value={newTask.date}
//                 onChange={(e) =>
//                   setNewTask({ ...newTask, date: e.target.value })
//                 }
//                 className="w-full mt-1"
//               />
//             </div>

//             <div>
//               <label className="text-sm text-gray-600">Description</label>
//               <textarea
//                 value={newTask.description}
//                 onChange={(e) =>
//                   setNewTask({ ...newTask, description: e.target.value })
//                 }
//                 placeholder="Add Description"
//                 className="w-full mt-1 p-2 border border-gray-300 rounded-md"
//                 rows={3}
//               />
//             </div>

//             <Button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white"
//             >
//               Create task
//             </Button>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default TaskManagement;
// Snehil code ends here

// Cursor code for here
// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { Trash2, Edit, Plus } from 'lucide-react';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// const TaskManagement = () => {
//   const [tasks, setTasks] = useState([
//     { id: 1, title: "Finishing Wireframe", completed: false },
//     { id: 2, title: "Meeting with team", completed: false },
//     { id: 3, title: "Buy a cat food", completed: true },
//     { id: 4, title: "Finishing daily commission", completed: true },
//     { id: 5, title: "Review project proposal", completed: false },
//     { id: 6, title: "Update documentation", completed: false },
//     { id: 7, title: "Prepare presentation", completed: false },
//   ]);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newTask, setNewTask] = useState({
//     title: "",
//     date: "",
//     description: "",
//     startTime: "",
//     endTime: "",
//   });

//   const toggleTaskCompletion = (taskId: number) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === taskId ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const deleteTask = (taskId: number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleNewTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const newTaskItem = {
//       id: tasks.length + 1,
//       title: newTask.title,
//       completed: false,
//     };
//     setTasks([...tasks, newTaskItem]);
//     setNewTask({
//       title: "",
//       date: "",
//       description: "",
//       startTime: "",
//       endTime: "",
//     });
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="max-w-md py-4 flex-1 relative h-full">
//       {/* Tasks Today Section */}
//       <div className="flex flex-col h-full">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-semibold">Tasks Today</h2>
//           <button className="text-blue-600 text-sm">View All</button>
//         </div>

//         {/* Task List with custom scrollable area */}
//         <div className="flex-1 overflow-hidden">
//           <div
//             className="h-[calc(5*3rem)] overflow-y-auto pr-4 space-y-3"
//             style={{ scrollbarWidth: 'thin', scrollbarColor: '#CBD5E0 #EDF2F7' }}
//           >
//             {tasks.map((task) => (
//               <div key={task.id} className="flex items-center gap-3 py-3 h-12">
//                 <input
//                   type="checkbox"
//                   checked={task.completed}
//                   onChange={() => toggleTaskCompletion(task.id)}
//                   className="w-4 h-4 rounded border-gray-300"
//                   aria-label={`Mark "${task.title}" as ${task.completed ? 'incomplete' : 'complete'}`}
//                 />
//                 <span
//                   className={`flex-1 ${
//                     task.completed ? "line-through text-gray-500" : ""
//                   }`}
//                 >
//                   {task.title}
//                 </span>
//                 <button
//                   onClick={() => deleteTask(task.id)}
//                   className="p-1 text-gray-400 hover:text-gray-600"
//                   aria-label={`Delete task "${task.title}"`}
//                 >
//                   <Trash2 size={16} />
//                 </button>
//                 <button
//                   className="p-1 text-gray-400 hover:text-gray-600"
//                   aria-label={`Edit task "${task.title}"`}
//                 >
//                   <Edit size={16} />
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Add Task Button - Fixed at the bottom */}
//         <div className="sticky bottom-6 text-center">
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors mx-auto"
//             aria-label="Add new task"
//           >
//             <Plus size={24} />
//           </button>
//         </div>
//       </div>

//       {/* Add Task Modal */}
//       <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle>Add New Task</DialogTitle>
//           </DialogHeader>
//           <form onSubmit={handleNewTaskSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="task-title" className="text-sm text-gray-600">Task title</label>
//               <Input
//                 id="task-title"
//                 value={newTask.title}
//                 onChange={(e) =>
//                   setNewTask({ ...newTask, title: e.target.value })
//                 }
//                 placeholder="Enter task title"
//                 className="w-full mt-1"
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label htmlFor="start-time" className="text-sm text-gray-600">Start Time</label>
//                 <Input
//                   id="start-time"
//                   type="time"
//                   value={newTask.startTime}
//                   onChange={(e) =>
//                     setNewTask({ ...newTask, startTime: e.target.value })
//                   }
//                   className="w-full mt-1"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="end-time" className="text-sm text-gray-600">End Time</label>
//                 <Input
//                   id="end-time"
//                   type="time"
//                   value={newTask.endTime}
//                   onChange={(e) =>
//                     setNewTask({ ...newTask, endTime: e.target.value })
//                   }
//                   className="w-full mt-1"
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="task-date" className="text-sm text-gray-600">Set Date</label>
//               <Input
//                 id="task-date"
//                 type="date"
//                 value={newTask.date}
//                 onChange={(e) =>
//                   setNewTask({ ...newTask, date: e.target.value })
//                 }
//                 className="w-full mt-1"
//               />
//             </div>

//             <div>
//               <label htmlFor="task-description" className="text-sm text-gray-600">Description</label>
//               <textarea
//                 id="task-description"
//                 value={newTask.description}
//                 onChange={(e) =>
//                   setNewTask({ ...newTask, description: e.target.value })
//                 }
//                 placeholder="Add Description"
//                 className="w-full mt-1 p-2 border border-gray-300 rounded-md"
//                 rows={3}
//               />
//             </div>

//             <Button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white"
//             >
//               Create task
//             </Button>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default TaskManagement;

"use client";

import React, { useState, useEffect } from "react";
import { Trash2, Edit, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Task {
  _id: string;
  title: string;
  completed: boolean;
  description?: string;
  date?: string;
  startTime?: string;
  endTime?: string;
}

const API_URL = "http://localhost:5000/api/tasks";

const TaskManagement = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    date: "",
    description: "",
    startTime: "",
    endTime: "",
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const toggleTaskCompletion = async (taskId: string, completed: boolean) => {
    try {
      const response = await fetch(`${API_URL}/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: !completed }),
      });
      if (response.ok) {
        setTasks(
          tasks.map((task) =>
            task._id === taskId ? { ...task, completed: !completed } : task
          )
        );
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (taskId: string) => {
    try {
      const response = await fetch(`${API_URL}/${taskId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setTasks(tasks.filter((task) => task._id !== taskId));
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleNewTaskSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
      if (response.ok) {
        const createdTask = await response.json();
        setTasks([...tasks, createdTask]);
        setNewTask({
          title: "",
          date: "",
          description: "",
          startTime: "",
          endTime: "",
        });
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="max-w-md py-4 flex-1 relative h-full">
      {/* Tasks Today Section */}
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Tasks Today</h2>
          <button className="text-blue-600 text-sm">View All</button>
        </div>

        {/* Task List with custom scrollable area */}
        <div className="flex-1 overflow-hidden">
          <div
            className="h-[calc(5*3rem)] overflow-y-auto pr-4 space-y-3"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#CBD5E0 #EDF2F7",
            }}
          >
            {tasks.map((task) => (
              <div key={task._id} className="flex items-center gap-3 py-3 h-12">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() =>
                    toggleTaskCompletion(task._id, task.completed)
                  }
                  className="w-4 h-4 rounded border-gray-300"
                  aria-label={`Mark "${task.title}" as ${
                    task.completed ? "incomplete" : "complete"
                  }`}
                />
                <span
                  className={`flex-1 ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {task.title}
                </span>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="p-1 text-gray-400 hover:text-gray-600"
                  aria-label={`Delete task "${task.title}"`}
                >
                  <Trash2 size={16} />
                </button>
                <button
                  className="p-1 text-gray-400 hover:text-gray-600"
                  aria-label={`Edit task "${task.title}"`}
                >
                  <Edit size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Add Task Button - Fixed at the bottom */}
        <div className="sticky bottom-6 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors mx-auto"
            aria-label="Add new task"
          >
            <Plus size={24} />
          </button>
        </div>
      </div>

      {/* Add Task Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Task</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleNewTaskSubmit} className="space-y-4">
            <div>
              <label htmlFor="task-title" className="text-sm text-gray-600">
                Task title
              </label>
              <Input
                id="task-title"
                value={newTask.title}
                onChange={(e) =>
                  setNewTask({ ...newTask, title: e.target.value })
                }
                placeholder="Enter task title"
                className="w-full mt-1"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="start-time" className="text-sm text-gray-600">
                  Start Time
                </label>
                <Input
                  id="start-time"
                  type="time"
                  value={newTask.startTime}
                  onChange={(e) =>
                    setNewTask({ ...newTask, startTime: e.target.value })
                  }
                  className="w-full mt-1"
                />
              </div>
              <div>
                <label htmlFor="end-time" className="text-sm text-gray-600">
                  End Time
                </label>
                <Input
                  id="end-time"
                  type="time"
                  value={newTask.endTime}
                  onChange={(e) =>
                    setNewTask({ ...newTask, endTime: e.target.value })
                  }
                  className="w-full mt-1"
                />
              </div>
            </div>

            <div>
              <label htmlFor="task-date" className="text-sm text-gray-600">
                Set Date
              </label>
              <Input
                id="task-date"
                type="date"
                value={newTask.date}
                onChange={(e) =>
                  setNewTask({ ...newTask, date: e.target.value })
                }
                className="w-full mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="task-description"
                className="text-sm text-gray-600"
              >
                Description
              </label>
              <textarea
                id="task-description"
                value={newTask.description}
                onChange={(e) =>
                  setNewTask({ ...newTask, description: e.target.value })
                }
                placeholder="Add Description"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                rows={3}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Create task
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TaskManagement;
