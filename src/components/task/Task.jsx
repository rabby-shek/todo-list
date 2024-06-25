import React from "react";
import { IoIosAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { BiTransfer } from "react-icons/bi";
const Add = () => {
  return (
    <section className="task-container">
      <div className="task-item">
        <div className="between">
        <h4>New</h4>
        <div><IoIosAdd className="add-icon" /></div>
        </div>
        <hr />
        <div className="new-task-list">
          <div className="task">
            <div className="task-header between">
              <div className="task-title">title</div>
              <div className="task-status-new">New</div>
            </div>
            <div className="task-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laborum est temporibus ipsum expedita eius deleniti quam! Incidunt, quo nobis.
            </div>
            <div className="task-footer between">
            <div className="task-btn-grp between col-gap-1">
            <button className="btn btn-sm btn-warning"><RxUpdate /></button>
            <button className="btn btn-sm btn-danger"><MdDelete /></button>
            <button className="btn btn-sm btn-primary"><BiTransfer /></button>
            </div>
              <input type="date" />
            </div>
          </div>
        </div>
      </div>
      <div className="task-item">
        <div className="between">
        <h4>Ongoing</h4>
        <div><IoIosAdd className="add-icon" /></div>
        </div>
        <hr />
        <div className="new-task-list">
          <div className="task">
            <div className="task-header between">
              <div className="task-title">title</div>
              <div className="task-status-ongoing">Ongoing</div>
            </div>
            <div className="task-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laborum est temporibus ipsum expedita eius deleniti quam! Incidunt, quo nobis.
            </div>
            <div className="task-footer between">
            <div className="task-btn-grp between col-gap-1">
            <button className="btn btn-sm btn-warning"><RxUpdate /></button>
            <button className="btn btn-sm btn-danger"><MdDelete /></button>
            <button className="btn btn-sm btn-primary"><BiTransfer /></button>
            </div>
              <input type="date" />
            </div>
          </div>
        </div>
      </div>
      <div className="task-item">
      <h4>Done</h4>
      <hr />
      </div>
    </section>
  );
};

export default Add;
