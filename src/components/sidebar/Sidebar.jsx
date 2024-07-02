import React from "react";
import { VscOrganization } from "react-icons/vsc";
import { FaTasks } from "react-icons/fa";
import { MdOutlineDashboard, MdAssignment } from "react-icons/md";
import { NavLink } from "react-router-dom";

/**
 * Sidebar Component
 *
 * This component renders a sidebar with navigation links. It uses a list of navigation items,
 * each with a specific icon and text. The sidebar's visibility can be toggled using the `isOpen` prop.
 *
 * @param {isOpen(type->boolean)} // Determines if the sidebar is open or closed.
 * @param {setIsOpen(type->method)} // For closing the sidebar onclick.
 *
 * Example usage:
 * <Sidebar isOpen={true} setIsOpen={setIsOpen} />
 */

// Array containing navigation items with href, icon, and text properties

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navItems = [
    {
      to: "/",
      icon: <MdOutlineDashboard className="nav-link-icon me-2" />,
      text: "Dashboard",
    },
    {
      to: "/organization",
      icon: <VscOrganization className="nav-link-icon me-2" />,
      text: "Your Organization",
    },
    {
      to: "/task-list",
      icon: <FaTasks className="nav-link-icon me-2" />,
      text: "Task List",
    },
    {
      to: "/assign-task",
      icon: <MdAssignment className="nav-link-icon me-2" />,
      text: "Assign Task",
    },
  ];
  return (
    <div className={`sidebar-container ${isOpen ? "show" : "hide"}`}>
      <div className="vh-100 d-lg-block">
        <ul className="nav flex-column">
          {/* Render navigation items by mapping through the navItems array */}
          {navItems.map((item, index) => (
            <li key={index} className="nav-item pointer">
              <NavLink
                className="nav-link between"
                to={item.to}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
