import React from "react";
import TaskHeader from "../global/TaskHeader";
import TaskFooter from "../global/TaskFooter";

/**
 * OngoingTask Component
 * This component renders a list of ongoing tasks. Each task displays its header, body, due date, and footer.
 * It also includes options to transfer tasks between different statuses.
 * @param {filterTasksByStatus(type->function)} // Function to filter tasks based on their status.
 * @param {handleDueDateChange(type->function)} // Function to handle changes in the task's due date.
 * 
 */

const OngoingTask = ({
  filterTasksByStatus,
  handleDueDateChange,
  taskTransferId,
  transferToNew,
  handleTransferToNew,
  transferToDone,
  handleTransferToDone,
  handleEditTask,
  handleDeleteTask,
  handleTransferShow,
}) => {
  console.log(typeof taskTransferId);
  return (
    <div className="new-task-list">
      {filterTasksByStatus("ongoing").map((item) => (
        <div key={item.id} className="task mt-3">
          {/* Task header */}
          <TaskHeader title={item.title} status="Ongoing" />

          <div className="task-body">
            {/* Task description */}
            {item.description}

            {/* Task creation time */}
            <div>
              <small>{item.createdDateTime}</small>
            </div>

            {/* Task due date */}
            <div className="task-due-date">
              <label htmlFor={`dueDate_${item.id}`} className="bold">
                Due Date:
              </label>
              <br />
              <input
                type="date"
                className="form-control"
                id={`dueDate_${item.id}`}
                value={item.dueDate || ""}
                onChange={(e) => handleDueDateChange(e, item.id)}
              />
            </div>

            {/* Task transfer options */}
            {taskTransferId === item.id && (
              <div className="mb-3">
                <div className="bold">Transfer to:</div>
                <div className="form-check">
                  <input
                    className="form-check-input form-control me-1 pointer"
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
                    className="form-check-input form-control me-1 pointer"
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
          </div>

          {/* Task Footer */}
          <TaskFooter
            handleEditTask={handleEditTask}
            handleDeleteTask={handleDeleteTask}
            handleTransferShow={handleTransferShow}
            item={item}
          />
        </div>
      ))}
    </div>
  );
};

export default OngoingTask;
