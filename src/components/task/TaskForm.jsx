import React, { useState, useEffect } from "react";

const TaskForm = ({ tasks, setTasks, editingTask, setEditingTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title || "");
      setDescription(editingTask.description || "");
    }
  }, [editingTask]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!editingTask) {
      // Create new task
      createNewTask();
    } else {
      // Update existing task
      updateTask();
    }

    // Clear input fields
    setTitle("");
    setDescription("");
  };

  const createNewTask = () => {
    // Get current date and time
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed
    const year = currentDate.getFullYear();
    
    // Calculate hours and format in 12-hour format with AM/PM
    let hours = currentDate.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    const minutes = currentDate.getMinutes();
    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;

    // Create new task object
    const newTask = {
      id: Date.now(),
      title,
      description,
      status: "new",
      createdDateTime: formattedDateTime, // Add created date and time
    };

    // Update tasks state and localStorage
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("taskList", JSON.stringify(updatedTasks));
  };

  const updateTask = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editingTask.id ? { ...task, title, description } : task
    );

    setTasks(updatedTasks);
    localStorage.setItem("taskList", JSON.stringify(updatedTasks));
    setEditingTask(null); // Clear editing task after update
  };

  return (
    <div className="new-task">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows={3}
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="mt-3">
            <button className="btn btn-sm btn-success">
              {editingTask ? "Update" : "Create"}
            </button>
            {editingTask && (
              <button
                type="button"
                className="btn btn-sm btn-secondary ms-2"
                onClick={() => setEditingTask(null)}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
