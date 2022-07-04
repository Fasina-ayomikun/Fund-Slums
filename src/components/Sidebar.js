import React from "react";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useAppProvider } from "../context";
function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useAppProvider();
  return (
    <section
      className={`${isSidebarOpen ? "sidebar open-sidebar" : "sidebar"}`}
    >
      <FaTimes onClick={closeSidebar} />
      <ul className='nav-links sidebar-links '>
        <li className='nav-link ' onClick={closeSidebar}>
          <NavLink to='/' activeclassname='active'>
            Home
          </NavLink>
        </li>
        <li className='nav-link ' onClick={closeSidebar}>
          <NavLink to='/profile' activeclassname='active'>
            Profile
          </NavLink>
        </li>
      
        <li className='nav-link' onClick={closeSidebar}>
          <NavLink to='/charities' activeclassname='active'>
            Charities
          </NavLink>
        </li>
        <li className='nav-link' onClick={closeSidebar}>
          <NavLink to='/about' activeclassname='active'>
            About
          </NavLink>
        </li>

        
      </ul>
    </section>
  );
}

export default Sidebar;
