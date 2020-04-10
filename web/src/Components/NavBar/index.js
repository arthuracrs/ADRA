import React from 'react'
import { Link } from "react-router-dom"

import './style.css'

import logo from './assets/logo.png'

export default function NavBar() {
    return (
        <div className="back-menu">
            <div className="menu">
                <img src={logo} alt="" className="logo" />
                <ul>
                    <li>
                        <Link to="/doacoes" className="link">Doações</Link>
                    </li>
                    <li>
                        <Link to="/about" className="link">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/users" className="link">Users</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}