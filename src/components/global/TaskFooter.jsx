import React from "react";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { BiTransfer } from "react-icons/bi";
const TaskFooter = (
 {
    handleEditTask,
    handleDeleteTask,
    handleTransferShow,
    item
 }
) => {
  return (
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
  );
};

export default TaskFooter;
