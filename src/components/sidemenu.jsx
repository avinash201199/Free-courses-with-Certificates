import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/sidemenu.css";

export default function Sidemenu({ isAuth, handleAuth }) {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => setCollapsed(!collapsed);

  const handleLogoutClick = () => {
    handleAuth();       // Clears username & sets isAuth = false
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className={`sidemenu-bar ${collapsed ? "collapsed" : "expanded"}`}>
      {/* Toggle Button */}
      <div className="sidemenu-toggle" onClick={toggleSidebar}>
        <span className="material-symbols-outlined">
          {collapsed ? "code" : "code_off"}
        </span>
      </div>

      {/* Sidebar Header (visible only when expanded) */}
      {!collapsed && (
        <div className="sidemenu-header">
          <h1>Free Courses with Certificates</h1>
        </div>
      )}

      {/* Sidebar Menu */}
      <ul className="sidemenu-list">
        <Link to="/dashboard">
          <li className="sidemenu-item">
            <span className="material-symbols-outlined">dashboard</span>
            {!collapsed && <span>Dashboard</span>}
          </li>
        </Link>

        <Link to="/">
          <li className="sidemenu-item">
            <span className="material-symbols-outlined">book</span>
            {!collapsed && <span>Courses</span>}
          </li>
        </Link>

        <li className="sidemenu-item">
          <span className="material-symbols-outlined">person</span>
          {!collapsed && <span>Students</span>}
        </li>

        <li className="sidemenu-item">
          <span className="material-symbols-outlined">library_books</span>
          {!collapsed && <span>Library</span>}
        </li>

        <Link to="/about">
          <li className="sidemenu-item">
            <span className="material-symbols-outlined">sentiment_very_satisfied</span>
            {!collapsed && <span>About</span>}
          </li>
        </Link>

        {/* Login / Logout Button */}
        <li
          className="sidemenu-item auth-button"
          onClick={() => {
            if (isAuth) {
              handleLogoutClick(); // Logout + redirect
            } else {
              navigate("/login");  // Navigate to login
            }
          }}
        >
          <span className="material-symbols-outlined">
            {isAuth ? "logout" : "login"}
          </span>
          {!collapsed && <span>{isAuth ? "Logout" : "Login"}</span>}
        </li>
      </ul>
    </div>
  );
}
