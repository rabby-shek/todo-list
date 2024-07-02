import React from "react";
import { VscOrganization } from "react-icons/vsc";
import { FaTasks } from "react-icons/fa";
import { MdOutlineDashboard, MdAssignment } from "react-icons/md";

/**
 * Sidebar Component
 *
 * This component renders a sidebar with navigation links. It uses a list of navigation items,
 * each with a specific icon and text. The sidebar's visibility can be toggled using the `isOpen` prop.
 *
 * Props:
 * - isOpen (boolean): Determines if the sidebar is open or closed.
 *
 * Example usage:
 * <Sidebar isOpen={true} />
 */

// Array containing navigation items with href, icon, and text properties
const navItems = [
  {
    href: "#home",
    icon: <MdOutlineDashboard className="nav-link-icon me-2" />,
    text: "Dashboard",
  },
  {
    href: "#home",
    icon: <VscOrganization className="nav-link-icon me-2" />,
    text: "Your Organization",
  },
  {
    href: "#features",
    icon: <FaTasks className="nav-link-icon me-2" />,
    text: "Task List",
  },
  {
    href: "#pricing",
    icon: <MdAssignment className="nav-link-icon me-2" />,
    text: "Assign Task",
  },
];

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar-container ${isOpen ? "show" : "hide"}`}>
      <div className="vh-100 d-lg-block">
        <ul className="nav flex-column">
          {/* Render navigation items by mapping through the navItems array */}
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a className="nav-link between" href={item.href}>
                {item.icon}
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
