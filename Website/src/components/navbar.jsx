import React, { useState } from 'react'
import '../App.css'

export default function navbar(props) {
  return (
    <nav>

      <div className="menu-nav-bar">
        <span class="material-symbols-outlined" onClick={props.toggleSideMenu}>menu</span>
      </div>
      <div className="search-bar">
        <input type="text" className='search-bar-input' id='search' />
        <button type="submit" className='search-bar-submit'>
          <label className='search-bar-placeholder' htmlFor="search"> Search...</label>
        </button>
      </div>
      <div className="nav-left-flex">
        <span class="material-symbols-outlined">notifications</span>
        <span class="material-symbols-outlined hide-item">bookmark_added</span>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span class="material-symbols-outlined">account_circle</span>
          <div className='hide-item' style={{ marginLeft: '10px' }}>Welcome User</div>
        </div>
      </div>
    </nav>
  )
}
