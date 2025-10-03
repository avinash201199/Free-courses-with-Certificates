import React, { useState } from "react";
import "../App.css";
import "../index.css";
import { Outlet, useLocation } from "react-router-dom";
import SideMenu from "./sidemenu";
import TitleTop from "./titleTop";
import Navbar from "./Navbar";
import Footer from "./footer";

const Layout = ({ userName }) => {
  const [active, setActive] = useState(false);
  const location = useLocation();

  const toggleSideMenu = () => {
    setActive(!active);
  };

  const hideNavbarPaths = ["/login", "/signup"];
  const showNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      <TitleTop />
      {showNavbar && <Navbar userName={userName} toggleSideMenu={toggleSideMenu} />}
      <SideMenu active={active} toggleSideMenu={toggleSideMenu} />
      <main>
        <Outlet /> {/* Page content goes here */}
      </main>{/* ✅ Footer is now consistent across all pages */}
    </>
  );
};

export default Layout;
