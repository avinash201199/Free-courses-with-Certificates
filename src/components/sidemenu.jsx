import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/sidemenu.css";
import { useTranslation } from 'react-i18next';

export default function Sidemenu({
  isAuth,
  handleAuth,
  collapsed,
  toggleSidebar,
}) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname === path || location.pathname.startsWith(path + "/");

  const handleLogoutClick = () => {
    handleAuth(); // Clears username & sets isAuth = false
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
          <h1>{t('main.title')}</h1>
        </div>
      )}

      {/* Sidebar Menu */}
      <ul className="sidemenu-list">
        <Link to="/dashboard">
          <li className={`sidemenu-item ${isActive("/dashboard") ? "active" : ""}`}>
            <span className="material-symbols-outlined">dashboard</span>
            {!collapsed && <span>{t('nav.dashboard')}</span>}
          </li>
        </Link>

        <Link to="/">
          <li className={`sidemenu-item ${isActive("/") ? "active" : ""}`}>
            <span className="material-symbols-outlined">book</span>
            {!collapsed && <span>{t('nav.courses')}</span>}
          </li>
        </Link>


        <li className="sidemenu-item">
          <span className="material-symbols-outlined">person</span>
          {!collapsed && <span>{t('nav.students')}</span>}
        </li>

        <li className="sidemenu-item">
          <span className="material-symbols-outlined">library_books</span>
          {!collapsed && <span>{t('nav.library')}</span>}
        </li>

        <Link to="/">
          <li className={`sidemenu-item ${isActive("/students") ? "active" : ""}`}>
            <span className="material-symbols-outlined">person</span>
            {!collapsed && <span>Students</span>}
          </li>
        </Link>

        <Link to="/">
          <li className={`sidemenu-item ${isActive("/library") ? "active" : ""}`}>
            <span className="material-symbols-outlined">library_books</span>
            {!collapsed && <span>Library</span>}
          </li>
        </Link>

        <Link to="/about">
          <li className={`sidemenu-item ${isActive("/about") ? "active" : ""}`}>
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
            {!collapsed && <span>{t('nav.about')}</span>}
          </li>
        </Link>

        {/* Login / Logout Button */}
        <li
          className={`sidemenu-item auth-button ${isActive("/login") && !isAuth ? "active" : ""}`}
          onClick={() => {
            if (isAuth) {
              handleLogoutClick(); // Logout + redirect
            } else {
              navigate("/login"); // Navigate to login
            }
          }}
        >
          <span className="material-symbols-outlined">
            {isAuth ? "logout" : "login"}
          </span>
          {!collapsed && <span>{isAuth ? t('nav.logout') : t('nav.login')}</span>}
        </li>
      </ul>
    </div>
  );
}
