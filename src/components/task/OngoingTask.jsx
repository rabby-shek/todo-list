import React from "react";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { BiTransfer } from "react-icons/bi";
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
  return (
    <div>
      {filterTasksByStatus("ongoing").map((item) => (
        <div key={item.id} className="task mt-3">
          <div className="task-header between">
            <div className="task-title">{item.title}</div>
            <div className="task-status-ongoing">Ongoing</div>
          </div>
          <div className="task-body">
            {item.description}
            <div>
              <small>{item.createdDateTime}</small>
            </div>
          </div>
          <div className="task-due-date">
            <label htmlFor={`dueDate_${item.id}`} className="bold">
              Due Date:{" "}
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
          {taskTransferId === item.id && (
            <div className="mb-3">
              <div className="bold">Transfer to:</div>
              <div className="form-check">
                <input
                  className="form-check-input form-control me-1"
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
                  className="form-check-input form-control me-1"
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
              <button
                className="btn btn-sm btn-warning"
                onClick={() => handleEditTask(item)}
              >
                <RxUpdate />
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDeleteTask(item.id)}
              >
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
  );
};

export default OngoingTask;
