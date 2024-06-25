import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button 
        className="btn btn-dark d-lg-none" 
        onClick={toggleSidebar}
        style={{ margin: '10px' }}
      >
        Toggle Sidebar
      </button>
      <div className={`bg-dark vh-100 d-lg-block ${isOpen ? 'd-block' : 'd-none'}`} style={{ width: '250px' }}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link text-light" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#features">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#pricing">Pricing</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
