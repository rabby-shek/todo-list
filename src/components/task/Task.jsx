import React, { useState, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { BiTransfer } from "react-icons/bi";
import TaskForm from "./TaskForm";

const Add = () => {
  const [taskForm, setTaskForm] = useState(false);
  const [newTasks, setNewTasks] = useState([]);
  const [taskTransferId, setTaskTransferId] = useState(null);
  const [transferToNew, setTransferToNew] = useState(false);
  const [transferToOngoing, setTransferToOngoing] = useState(false);
  const [transferToDone, setTransferToDone] = useState(false);
  const [dueDate, setDueDate] = useState("");

  const handleTaskForm = () => {
    setTaskForm(!taskForm);
  };

  const handleTransferShow = (id) => {
    setTaskTransferId(id === taskTransferId ? null : id);
    // Reset transfer checkboxes
    setTransferToNew(false);
    setTransferToOngoing(false);
    setTransferToDone(false);
  };

  const handleTransferToNew = () => {
    setTransferToNew(true);
    setTransferToOngoing(false);
    setTransferToDone(false);
    // Update task status to "New"
    updateTaskStatus("new");
  };

  const handleTransferToOngoing = () => {
    setTransferToNew(false);
    setTransferToOngoing(true);
    setTransferToDone(false);
    // Update task status to "Ongoing"
    updateTaskStatus("ongoing");
  };

  const handleTransferToDone = () => {
    setTransferToNew(false);
    setTransferToOngoing(false);
    setTransferToDone(true);
    // Update task status to "Done"
    updateTaskStatus("done");
  };

  const updateTaskStatus = (status) => {
    const updatedTasks = newTasks.map((task) => {
      if (task.id === taskTransferId) {
        return { ...task, status };
      }
      return task;
    });
    setNewTasks(updatedTasks);
    localStorage.setItem("taskList", JSON.stringify(updatedTasks));
  };

  const handleDueDateChange = (e, taskId) => {
    const selectedDate = e.target.value;
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    // Check if selected date is before today
    if (selectedDate < today) {
      alert("Due date cannot be before today's date.");
      return; // Exit function without updating state
    }

    const updatedTasks = newTasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, dueDate: selectedDate };
      }
      return task;
    });
    setNewTasks(updatedTasks);
    localStorage.setItem("taskList", JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    try {
      const storedTasks = JSON.parse(localStorage.getItem("taskList")) || [];
      setNewTasks(storedTasks);
    } catch (error) {
      console.error("Failed to parse tasks from localStorage", error);
      setNewTasks([]);
    }
  }, []);

  // Filter tasks by status
  const filterTasksByStatus = (status) =>
    newTasks.filter((task) => task.status === status);

  return (
    <section className="task-container">
      {/* New Tasks */}
      <div className="task-item">
        <div className="between">
          <h4>New</h4>
          <div>
            <IoIosAdd className="add-icon" onClick={handleTaskForm} />
          </div>
        </div>
        <hr />
        {taskForm && <TaskForm tasks={newTasks} setTasks={setNewTasks} />}
        <div className="new-task-list">
          {filterTasksByStatus("new").map((item) => (
            <div key={item.id} className="task mt-3">
              <div className="task-header between">
                <div className="task-title">{item.title}</div>
                <div className="task-status-new">New</div>
              </div>
              <div className="task-body">{item.description} <div><small>{item.createdDateTime}</small></div></div>
              {taskTransferId === item.id && (
                <div className="mb-3">
                  <div>Transfer to:</div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`transferToOngoing_${item.id}`}
                      checked={transferToOngoing}
                      onChange={handleTransferToOngoing}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`transferToOngoing_${item.id}`}
                    >
                      Ongoing
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`transferToDone_${item.id}`}
                      checked={transferToDone}
                      onChange={handleTransferToDone}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`transferToDone_${item.id}`}
                    >
                      Done
                    </label>
                  </div>
                </div>
              )}
              <div className="task-footer between">
                <div className="task-btn-grp between col-gap-1">
                  <button className="btn btn-sm btn-warning">
                    <RxUpdate />
                  </button>
                  <button className="btn btn-sm btn-danger">
                    <MdDelete />
                  </button>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleTransferShow(item.id)}
                  >
                    <BiTransfer />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ongoing Tasks */}
      <div className="task-item">
        <div className="between">
          <h4>Ongoing</h4>
        </div>
        <hr />
        <div className="new-task-list">
          {filterTasksByStatus("ongoing").map((item) => (
            <div key={item.id} className="task mt-3">
              <div className="task-header between">
                <div className="task-title">{item.title}</div>
                <div className="task-status-ongoing">Ongoing</div>
              </div>
              <div className="task-body">{item.description}<div><small>{item.createdDateTime}</small></div></div>
              <div className="task-due-date between">
                <label htmlFor={`dueDate_${item.id}`}>Due Date:</label>
                <input
                  type="date"
                  id={`dueDate_${item.id}`}
                  value={item.dueDate || ""}
                  onChange={(e) => handleDueDateChange(e, item.id)}
                />
              </div>
              {taskTransferId === item.id && (
                <div className="mb-3">
                  <div>Transfer to:</div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`transferToNew_${item.id}`}
                      checked={transferToNew}
                      onChange={handleTransferToNew}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`transferToNew_${item.id}`}
                    >
                      New
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`transferToDone_${item.id}`}
                      checked={transferToDone}
                      onChange={handleTransferToDone}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`transferToDone_${item.id}`}
                    >
                      Done
                    </label>
                  </div>
                </div>
              )}
              <div className="task-footer between">
                <div className="task-btn-grp between col-gap-1">
                  <button className="btn btn-sm btn-warning">
                    <RxUpdate />
                  </button>
                  <button className="btn btn-sm btn-danger">
                    <MdDelete />
                  </button>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleTransferShow(item.id)}
                  >
                    <BiTransfer />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Done Tasks */}
      <div className="task-item">
        <div className="between">
          <h4>Done</h4>
        </div>
        <hr />
        <div className="new-task-list">
          {filterTasksByStatus("done").map((item) => (
            <div key={item.id} className="task mt-3">
              <div className="task-header between">
                <div className="task-title">{item.title}</div>
                <div className="task-status-done">Done</div>
              </div>
              <div className="task-body">{item.description}<div><small>{item.createdDateTime}</small></div></div>
              {taskTransferId === item.id && (
                <div className="mb-3">
                  <div>Transfer to:</div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`transferToNew_${item.id}`}
                      checked={transferToNew}
                      onChange={handleTransferToNew}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`transferToNew_${item.id}`}
                    >
                      New
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`transferToOngoing_${item.id}`}
                      checked={transferToOngoing}
                      onChange={handleTransferToOngoing}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`transferToOngoing_${item.id}`}
                    >
                      Ongoing
                    </label>
                  </div>
                </div>
              )}
              <div className="task-footer between">
                <div className="task-btn-grp between col-gap-1">
                  <button className="btn btn-sm btn-warning">
                    <RxUpdate />
                  </button>
                  <button className="btn btn-sm btn-danger">
                    <MdDelete />
                  </button>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleTransferShow(item.id)}
                  >
                    <BiTransfer />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Add;
