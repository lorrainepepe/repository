import './Logo.css'
import React from 'react'
import logo from '../img/accurate.png'

export default props =>
    <aside className="logo">
        <figure>
            <a href="/" className="logo">
                <img src={logo} alt="Accurate" width="150px"/>
            </a>
        </figure>
    </aside>