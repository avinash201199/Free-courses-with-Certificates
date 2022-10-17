import React, { useState } from 'react'
import '../App.css'
import json from '../components/data/allcourses.json'

export default function navbar(props) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, showSearch] = useState(false)

  return (
    <nav>
      <div className="menu-nav-bar">
        <span class="material-symbols-outlined" onClick={props.toggleSideMenu}>menu</span>
      </div>
      <div className="search-bar">
        <input type="text" className='search-bar-input' placeholder='Search..' id='search' onFocus={() => showSearch(true)} onBlur={() => showSearch(false)} onChange={e => setSearchTerm(e.target.value)} />
        {searchResults ?
          <div className="search-bar-area">
            {json.map((val, key) => {
              return <div style={{ margin: "0" }}>{val.cards.filter((val) => {
                if (searchTerm == "") return val
                else if (val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) return val
              }).map((val, key) => {
                return <div key={key} className='search-card-items'>
                  <div className='col-lg-4 featured-card' style={{ width: "100%" }}>
                    <div className="card-price-button">
                      <div className="card-title"><b>{val.name}</b></div>
                      <a className="card-button" href={val.link}>Go to Course</a>
                    </div>
                  </div>
                </div>
              })}</div>
            })}
          </div>
          : null}
        {/* <button type="submit" className='search-bar-submit'>
          <label className='search-bar-placeholder' htmlFor="search"> Search...</label>
        </button> */}
      </div>
      <div className="nav-left-flex hide-item">
        <span class="material-symbols-outlined">notifications</span>
        <span class="material-symbols-outlined hide-item">bookmark_added</span>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span class="material-symbols-outlined">account_circle</span>
          <div className='' style={{ marginLeft: '10px' }}>Welcome User</div>
        </div>
      </div>
    </nav>
  )
}