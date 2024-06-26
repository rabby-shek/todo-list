import React, { useState } from "react";

const TaskForm = ({ tasks, setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), title, description, status: "new" };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("taskList", JSON.stringify(updatedTasks));
    setTitle("");
    setDescription("");
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
            <button className="btn btn-sm btn-success">Create</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
