import React from "react";

/**
 * TaskHeader Component
 * This component renders the header of a task, displaying its title and status.
 * The status is used to apply a corresponding CSS class for dynamic styling.
 * @param {title(type->String)} // Title of the task
 * @param {status(type->String)} // Status of the current task
 * Example usage:
 * <TaskHeader title="Complete the project" status="Ongoing" />
 * <TaskHeader title="Review the code" status="Done" /
 */

const TaskHeader = ({ title, status }) => {
  const statusStyle = status.toLowerCase();

  return (
    <div className="task-header between">
      <div className="task-title">{title}</div>
      <div className={`task-status-${statusStyle}`}>{status}</div>
    </div>
  );
};

export default TaskHeader;
