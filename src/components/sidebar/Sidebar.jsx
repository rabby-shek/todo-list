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
 *
 * Example usage:
 * <Sidebar isOpen={true} />
 */

// Array containing navigation items with href, icon, and text properties

const Sidebar = ({ isOpen }) => {
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
      to: "#pricing",
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
            <li key={index} className="nav-item">
              <NavLink className="nav-link between" to={item.to}>
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
