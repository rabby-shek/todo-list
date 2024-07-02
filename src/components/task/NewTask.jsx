import React from "react";
import TaskHeader from "../global/TaskHeader";
import TaskFooter from "../global/TaskFooter";

const NewTask = ({
  filterTasksByStatus,
  taskTransferId,
  transferToOngoing,
  handleTransferToOngoing,
  transferToDone,
  handleTransferToDone,
  handleEditTask,
  handleDeleteTask,
  handleTransferShow,
}) => {
  return (
    <div className="new-task-list">
      {filterTasksByStatus("new")
        .reverse()
        .map((item) => (
          <div key={item.id} className="task mt-3">
            <TaskHeader title={item.title} status="New" />
            <div className="task-body">
              {item.description}
              <div>
                <small>{item.createdDateTime}</small>
              </div>
            </div>
            {taskTransferId === item.id && (
              <div className="mb-3">
                <div>Transfer to:</div>
                <div className="form-check">
                  <input
                    className="form-check-input form-control me-1 pointer"
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

export default NewTask;
