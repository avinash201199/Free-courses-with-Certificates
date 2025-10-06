import React, { useState } from "react";
import "../App.css";
import "../index.css";
import { Outlet, useLocation } from "react-router-dom";
import SideMenu from "./sidemenu";
import TitleTop from "./titleTop";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ userName }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleSidebar = () => setCollapsed(!collapsed);
  
  const [active, setActive] = useState(false);
  const location = useLocation();

  const toggleSideMenu = () => {
    setActive(!active);
    setCollapsed(!collapsed);
  };

  const hideNavbarPaths = ["/login", "/signup"];
  const showNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      <TitleTop />
 
      {showNavbar && <Navbar userName={userName} toggleSideMenu={toggleSideMenu} collapsed={collapsed} />}
      <SideMenu active={active} toggleSideMenu={toggleSideMenu} collapsed={collapsed} toggleSidebar={toggleSidebar} />
      <main className={collapsed?"pl-40 overflow-hidden":"pl-64 overflow-hidden "}
       collapsed={collapsed} toggleSideMenu={toggleSideMenu}>
        <Outlet /> {/* Page content goes here */}
      </main>{/* ✅ Footer is now consistent across all pages */}
    </>
    
  );
};

export default Layout;
