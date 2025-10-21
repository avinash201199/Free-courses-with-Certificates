import React, { useState } from "react";
import "../App.css";
import "../index.css";
import { Outlet, useLocation } from "react-router-dom";
import SideMenu from "./sidemenu";
import TitleTop from "./titleTop";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ isAuth, userName, isLoggedIn, handleAuth }) => {
  const location = useLocation();
  // Sidebar collapsed state is now lifted here
  const [collapsed, setCollapsed] = useState(true);
  const toggleSideMenu = () => setCollapsed((prev) => !prev);

  const hideNavbarPaths = ["/login", "/signup"];
  const showNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      <TitleTop />
      {showNavbar && (
        <Navbar userName={userName} toggleSideMenu={toggleSideMenu} />
      )}
      {/* Pass collapsed and toggle to SideMenu */}
      <SideMenu
        isAuth={isAuth}
        handleAuth={handleAuth}
        collapsed={collapsed}
        toggleSidebar={toggleSideMenu}
      />
      {/* Pass collapsed to Outlet context for AboutPage */}
      <main className="main-content">
        <Outlet
          context={{
            sidebarCollapsed: collapsed,
            toggleSidebar: toggleSideMenu,
          }}
        />
      </main>
    </>
  );
};

export default Layout;
