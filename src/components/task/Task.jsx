import React from "react";

const Add = () => {
  return (
    <section className="task-container">
      <div className="task-item">
        <h4>New</h4>
        <hr />
        <div className="task-list">
          task
        </div>
      </div>
      <div className="task-item">
      <h4>Ongoing</h4>
      <hr />
      </div>
      <div className="task-item">
      <h4>Done</h4>
      <hr />
      </div>
    </section>
  );
};

export default Add;
