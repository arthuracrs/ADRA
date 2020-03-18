import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Routes from './routes'

import './App.css'

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className='menu'>
            <Link to="/doacoes" className='button'>Doações</Link>
            <Link to="/about" className='button'>About</Link>
            <Link to="/users" className='button'>Users</Link>
        </div>
        <Routes />
      </BrowserRouter>
    </div>
  );
}
