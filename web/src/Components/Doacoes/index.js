import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'

import './style.css'

import logo from './assets/logo.png'
import tshirt from './assets/t-shirt.svg'
import basicbasket from './assets/basicbasket.svg'

export default function Home() {
  const [donations, setDonations] = useState([])

  async function loadDonations() {
    const response = await axios.get('http://192.168.1.6:3001/search', { params: { latitude: -9.3891154, longitude: -40.4897314 } });
    setDonations(response.data)
  }

  useEffect(() => {
    loadDonations()
  }, [])

  return (
    <div className="donations-container">
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
      <div className='donations-list'>
        {donations.map((x) =>
          <div key={x._id} className="item">
            <div className='container-1'>
              <img className="icon" alt="icon" src={x.tipo === 'food' ? basicbasket : tshirt} />
              <ul className='donation-data'>
                <li> <strong>Nome: </strong>{x.doador_data.username}</li>
                <li><strong>endereço: </strong> {x.doador_data.endereco}</li>
                <li><strong>Cidade: </strong>{x.doador_data.cidade}</li>
              </ul>
            </div>
            <div className='container-2'>
              <a href='/#'>acessar</a>
            </div>
          </div>)}
      </div>
    </div>
  )
}