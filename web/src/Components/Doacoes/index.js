import React, { useState, useEffect } from "react"
import axios from 'axios'


import './style.css'
import tshirt from './assets/t-shirt.svg'
import basicbasket from './assets/basicbasket.svg'


export default function Home() {
  const [doacoes, setDoacoes] = useState([])

  const [coords, setCoords] = useState([])

  async function loadDoacoes() {
    await navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      setCoords([latitude, longitude])
    })
    console.log('latitude: ' + coords[0])
    console.log('longitude: ' + coords[1])

    const response = await axios.get('http://localhost:3001/search', { params: {latitude: -9.3891154, longitude: -40.4897314} });
    setDoacoes(response.data)
  }

  useEffect(() => {
    loadDoacoes()
  }, [])

  return (
    <div className="doacoes">
      <h1>Doações</h1>
      <div className="location">
        <h2>minha location</h2>
        <form>
          <div>
            <input type="text" placeholder="latitude" value={coords[0]} onChange={e => setCoords[(e.target.value)]} />
            <input type="text" placeholder="longitude" value={coords[1]} onChange={e => setCoords([])} />
          </div>
        </form>
      </div>
      <div className='list'>
        {doacoes.map((x) =>
          <div key={x._id} href='#' className="item">
            <div className='container-1'>
              <img alt="icone" src={x.tipo === 'alimento' ? basicbasket : tshirt} />
              <div className='dataDonation'>
                <strong>{x.doador_data.username}</strong>
                <span>{x.doador_data.endereco}</span>
                <span>{x.doador_data.cidade}</span>
              </div>
            </div>
            <div className='container-2'>
              <a href='/#'>acessar</a>
            </div>
          </div>)}
      </div>
    </div>
  )
}