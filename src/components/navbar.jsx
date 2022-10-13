import React, { useState } from "react";
import "../App.css";

export default function navbar(props) {
  const handleSearchInput = (e) => {
    props.setQuery("");
    setTimeout(() => {
      props.setQuery(e.target.value);
    }, 0);
  };

  return (
    <nav>
      <div className="menu-nav-bar">
        <span
          className="material-symbols-outlined"
          onClick={props.toggleSideMenu}
        >
          menu
        </span>
      </div>
      <div className="search-bar">
        <input
          type="text"
          className="search-bar-input"
          id="search"
          onChange={handleSearchInput}
        />
        <button type="submit" className="search-bar-submit">
          <label className="search-bar-placeholder" htmlFor="search">
            {" "}
            Search..
          </label>
        </button>
      </div>
      <div className="nav-left-flex">
        <span className="material-symbols-outlined">notifications</span>
        <span className="material-symbols-outlined hide-item">
          bookmark_added
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="material-symbols-outlined">account_circle</span>
          <div className="hide-item" style={{ marginLeft: "10px" }}>
            Welcome User
          </div>
        </div>
      </div>
    </nav>
  );
}
