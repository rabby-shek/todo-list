import React from "react";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { BiTransfer } from "react-icons/bi";

/**
 * TaskFooter Component
 * This component renders the footer of a task, displaying buttons for editing, deleting, and transferring the task.
 * @param {handleEditTask(type->function)} // Function to call when the edit button is clicked. It receives the task item as an argument.
 * @param {handleDeleteTask(type->function) } //Function to call when the delete button is clicked. It receives the task item ID as an argument.
 * @param {handleTransferShow(type->function)} //  Function to call when the transfer button is clicked. It receives the task item ID as an argument.
 * item (object): The task item data.
 */

const TaskFooter = ({
  handleEditTask,
  handleDeleteTask,
  handleTransferShow,
  item,
}) => {
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
