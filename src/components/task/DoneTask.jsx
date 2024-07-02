import React from "react";
import TaskHeader from "../global/TaskHeader";
import { MdDelete } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
const DoneTask = ({
  filterTasksByStatus,
  taskTransferId,
  transferToNew,
  handleTransferToNew,
  transferToOngoing,
  handleTransferToOngoing,
  handleDeleteTask,
  handleTransferShow,
}) => {
  return (
    <div className="new-task-list">
      {filterTasksByStatus("done").map((item) => (
        <div key={item.id} className="task mt-3">
          <TaskHeader title={item.title} status="Done" />
          <div className="task-body">
            {item.description}
            <div>
              <small>{item.createdDateTime}</small>
            </div>
          </div>
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

export default DoneTask;
