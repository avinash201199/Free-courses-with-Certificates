import React, { useState } from "react";

import { X } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/sidemenu.css";

export default function sidemenu(props) {
  const isActive = props.active;

  const handleToogleSideMenu=()=>{
    props.toggleSideMenu()
  }
  return (
    <div className={isActive ? "active" : "inactive"}>
      <div className="sidemenu-bar">
        <div className="sidemenu-close" onClick={handleToogleSideMenu}>
          <X />
        </div>
        <div className="sidemenu-bar-title">
          <span className="material-symbols-outlined">code</span>
          <br />
          Free Courses with Certificates
          <br />
          <span className="material-symbols-outlined">code_off</span>
        </div>
        <ul className="sidemenu-bar-list">
          <Link to="/dashboard" >
            <li className="sidemenu-bar-items" onClick={handleToogleSideMenu}>
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </li>
          </Link>
          <Link to="/">
            <li className="sidemenu-bar-items" onClick={handleToogleSideMenu}>
              <span className="material-symbols-outlined">book</span>
              Courses
            </li>
          </Link>
          <li className="sidemenu-bar-items" onClick={handleToogleSideMenu}>
            <span className="material-symbols-outlined">person</span>
            Students
          </li>
          <li className="sidemenu-bar-items" onClick={handleToogleSideMenu}>
            <span className="material-symbols-outlined">library_books</span>
            Library
          </li>
          <Link to="/about">
            <li className="sidemenu-bar-items" onClick={handleToogleSideMenu}>
              <span className="material-symbols-outlined">
                sentiment_very_satisfied
              </span>
              About
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
