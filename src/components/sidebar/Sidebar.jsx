import React from "react";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar-container ${isOpen ? "show" : "hide"}`}>
      <div className={` vh-100 d-lg-block`}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link " href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#features">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#pricing">
              Pricing
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
