import React, { useState } from "react";
import { Link } from "react-router-dom";
import json from "./data/allcourses.json";
import { Button } from "react-bootstrap";
import OutsideAlerter from "./Outsideclick";
import { useBookmarks } from "../context/BookmarkContext";
import "../styles/navbar.css";
import { useTheme } from "../contexts/ThemeContext";

import {FiDelete} from "react-icons/fi";
import {GrClear} from "react-icons/gr";
import {BsSun, BsMoon} from "react-icons/bs";

export default function Navbar({userName,toggleSideMenu,collapsed}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, showSearch] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const { bookmarks } = useBookmarks();

  const handleClick = () => {
    setSearchTerm("");
    showSearch(0);
  };

  const closeSearch = () => {
    showSearch(0);
  };

  return (
    <nav
      className={`bg-blue-500 navbarset transition-all duration-300 ${
        collapsed ? "ml-0" : "ml-0"
      }`}
    >
      <div className="menu-nav-bar">
        <span className="material-symbols-outlined" onClick={toggleSideMenu}>
          menu
        </span>
      </div>
      <OutsideAlerter closeSearch={handleClick} >
        <div className="search-bar flex justify-between bg-white border-2 border-blue-600 pl-10 py-2 pr-2 mr-20 rounded-lg">
          <input
            type="text"
            className="search-bar-input"
            placeholder="Search.."
            id="search"
            onFocus={() => showSearch(1)}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {searchResults ? (
            <div className="search-bar-area" onBlur={() => showSearch(0)}>
              {json.map((val, key) => {
                return (
                  <div className="search-bar-children" key={key}>
                    {val.cards
                      .filter((data) => {
                        if (searchTerm == ""){return data;}
                        else if (
                          data.name?.toLocaleLowerCase()
                            .includes(searchTerm.toLocaleLowerCase())
                        ){
                          return data.name;}
                      })
                      .map((card, key) => {
                        return (
                          <div key={key} className="search-card-items ">
                            <div
                              className="col-lg-4 featured-card"
                              style={{ width: "100%" }}
                            >
                              <div className="card-price-button">
                                {/* <div className="card-title"></div> */}
                                <a
                                  className="card-button"
                                  href={card.link}
                                  target="_blank"
                                >
                                  <b>{card.name}</b>
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                );
              })}
            </div>
          ) : null}

          <button
            type="submit"
            className="search-bar-submit"
            onBlur={() => showSearch(0)}
            onClick={handleClick}
          >
            <FiDelete/>
          </button>

          <button
            className="close-search-btn"
            onClick={closeSearch}
            style={{ visibility: searchResults ? "visible" : "hidden" }}
          >
            <GrClear className="text-white"/>
          </button>
        </div>
      </OutsideAlerter>
      <div className="nav-left-flex hide-item rounded-lg bg-blue-400 px-2">
        <span className="material-symbols-outlined text-white">notifications</span>
        <Link to="/bookmarks" className="relative">
          <span className="material-symbols-outlined hide-item text-white hover:text-yellow-300 transition-colors">bookmark_added</span>
          {bookmarks.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {bookmarks.length}
            </span>
          )}
        </Link>
        
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-8 h-8 transition-all duration-300 rounded-full hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Toggle theme"
          title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? (
            <BsMoon className="w-5 h-5 text-white transition-transform duration-300 hover:scale-110" />
          ) : (
            <BsSun className="w-5 h-5 text-white transition-transform duration-300 hover:scale-110 hover:rotate-90" />
          )}
        </button>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="material-symbols-outlined text-white pr-2">account_circle</span>
          <div className="text-white text-lg" style={{ marginLeft: "1px" }}>
            {userName}
          </div>
        </div>
      </div>
    </nav>
  );
}
