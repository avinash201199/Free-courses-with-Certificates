import React, { useState } from "react";
import json from "./data/allcourses.json";
import { Button } from "react-bootstrap";
import OutsideAlerter from "./Outsideclick";
import "../styles/navbar.css";

// react icons
import {ImBin2} from "react-icons/im";
import {AiFillCloseSquare} from "react-icons/ai";

export default function Navbar(props) {
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
    <nav className=" border-2 border-blue-900 bg-blue-600">
      <div className="menu-nav-bar">
        <span class="material-symbols-outlined" onClick={props.toggleSideMenu}>
          menu
        </span>
      </div>
      <OutsideAlerter closeSearch={handleClick} >
        <div className="mr-5 pl-5 rounded-lg text-blue-600 search-bar flex justify-between bg-white">
          <input
            type="text"
            className="search-bar-input py-2 px-3 rounded-lg w-96"
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
                        if (searchTerm == "") return data;  
                        else if (
                          data.name?.toLocaleLowerCase()
                            .includes(searchTerm.toLocaleLowerCase())
                        )
                          return data.name;
                      })
                      .map((card, key) => {
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
            <ImBin2 color="gray" className="ml-2" size={25}/>
          </button>

          <button
            className="close-search bg-white mx-3"
            onClick={closeSearch}
            style={{ visibility: searchResults ? "visible" : "hidden" }}
          >
            <AiFillCloseSquare size={25} color="red"/>
          </button>
        </div>
      </OutsideAlerter>
      <div className="nav-left-flex hide-item">
        <span class="material-symbols-outlined text-white">notifications</span>
        <span class="material-symbols-outlined hide-item text-white">bookmark_added</span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span class="material-symbols-outlined text-white">account_circle</span>
          <div className="text-white" style={{ marginLeft: "10px" }}>
            Welcome User
          </div>
        </div>
      </div>
    </nav>
  );
}
