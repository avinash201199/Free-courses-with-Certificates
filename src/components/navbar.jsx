import React, { useState } from "react";
import json from "./data/allcourses.json";
import { Button } from "react-bootstrap";
import OutsideAlerter from "./Outsideclick";
import "../styles/navbar.css";

import {FiDelete} from "react-icons/fi";
import {GrClear} from "react-icons/gr";

export default function Navbar({userName,toggleSideMenu}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, showSearch] = useState(0);

  const handleClick = () => {
    setSearchTerm("");
    showSearch(0);
  };

  const closeSearch = () => {
    showSearch(0);
  };

  return (
    <nav className="bg-blue-500 navbarset">
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
        <span className="material-symbols-outlined hide-item text-white">bookmark_added</span>
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
