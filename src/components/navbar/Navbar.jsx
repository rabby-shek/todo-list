import React from "react";
import Logo from "../../assets/images/logo.png";
import { CiMenuFries } from "react-icons/ci";
import Day from "./Day";
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar-container between">
      <div className="nav-logo center col-gap-1">
        <img src={Logo} alt="logo" />
        <Day />
      </div>

      <div className="nav-toggle" onClick={toggleSidebar}>
        <CiMenuFries className="menu-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
