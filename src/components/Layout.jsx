import React, { useState } from "react";
import "../App.css";
import "../index.css";
import { Outlet } from "react-router-dom";
import SideMenu from "./sidemenu";
import TitleTop from "./titleTop";
import Navbar from "./navbar";
import Footer from "./footer";
const Layout = (props) => {
  const [active, inactive] = useState(false);
  const [query, setQuery] = useState("");

  const toggleSideMenu = () => {
    inactive(!active);
    // console.log("yo");
  };
  return (
    <>
      <TitleTop />
      <Navbar toggleSideMenu={toggleSideMenu} setQuery={setQuery} />
        <SideMenu active={active} toggleSideMenu={toggleSideMenu} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
