import React, { useState } from "react";

import json from "../components/data/allcourses.json";
import { Button } from "react-bootstrap";
import OutsideAlerter from "./Outsideclick";
export default function navbar(props) {
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
    <nav>
      <div className="menu-nav-bar">
        <span class="material-symbols-outlined" onClick={props.toggleSideMenu}>
          menu
        </span>
      </div>
      <OutsideAlerter closeSearch={handleClick}>
        <div className="search-bar">
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
                  <div style={{ margin: "0" }}>
                    {val.cards
                      .filter((val) => {
                        if (searchTerm == "") return val;
                        else if (
                          val.name
                            .toLocaleLowerCase()
                            .includes(searchTerm.toLocaleLowerCase())
                        )
                          return val.name;
                      })
                      .map((val, key) => {
                        return (
                          <div key={key} className="search-card-items">
                            <div
                              className="col-lg-4 featured-card"
                              style={{ width: "100%" }}
                            >
                              <div className="card-price-button">
                                {/* <div className="card-title"></div> */}
                                <a
                                  className="card-button"
                                  href={val.link}
                                  target="_blank"
                                >
                                  <b>{val.name}</b>
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
            <label className="search-bar-placeholder" htmlFor="search">
              {" "}
              Clear
            </label>
          </button>
          {searchResults ? (
            <Button
              variant="danger"
              className="close-search-btn"
              onClick={closeSearch}
            >
              close search
            </Button>
          ) : null}
        </div>
      </OutsideAlerter>
      <div className="nav-left-flex hide-item">
        <span class="material-symbols-outlined">notifications</span>
        <span class="material-symbols-outlined hide-item">bookmark_added</span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span class="material-symbols-outlined">account_circle</span>
          <div className="" style={{ marginLeft: "10px" }}>
            Welcome User
          </div>
        </div>
      </div>
    </nav>
  );
}
