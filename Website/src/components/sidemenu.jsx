import React, {useState} from 'react'
import '../App.css'

export default function sidemenu(props) {
    const isActive = props.active;

    return (
        <div className={isActive ? 'active' : 'inactive'}>
            <div className='sidemenu-bar'>
                <div className="sidemenu-close" onClick={props.toggleSideMenu}>
                    <i class="fal fa-times"></i>
                </div>
                <div className="sidemenu-bar-title">
                    <span className="material-symbols-outlined">code</span>
                    <br />
                    Free Courses with Certificates
                    <br />
                    <span class="material-symbols-outlined">code_off</span>
                </div>
                <ul className="sidemenu-bar-list">
                    <li className="sidemenu-bar-items">
                        <span class="material-symbols-outlined">dashboard</span>
                        Dashboard
                    </li>
                    <li className="sidemenu-bar-items">
                        <span class="material-symbols-outlined">book</span>
                        Courses
                    </li>
                    <li className="sidemenu-bar-items">
                        <span class="material-symbols-outlined">person</span>
                        Students
                    </li>
                    <li className="sidemenu-bar-items">
                        <span class="material-symbols-outlined">library_books</span>
                        Library
                    </li>
                    <li className="sidemenu-bar-items">
                        <span class="material-symbols-outlined">sentiment_very_satisfied</span>
                        About
                    </li>
                </ul>
            </div>
        </div>
    )
}
