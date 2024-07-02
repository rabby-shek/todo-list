import React from "react";

const TaskHeader = ({ title }) => {
  return (
    <div>
      <div className="task-header between">
        <div className="task-title">{title}</div>
        <div className="task-status-ongoing">Ongoing</div>
      </div>
    </div>
  );
};

export default TaskHeader;
