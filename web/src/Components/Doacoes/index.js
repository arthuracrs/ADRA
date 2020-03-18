import React, { useState, useEffect } from "react"
import axios from 'axios'

import './style.css'
import tshirt from './assets/t-shirt.svg'
import basicbasket from './assets/basicbasket.svg'


export default function Home() {
  const [doacoes, setDoacoes] = useState([])

  async function loadDoacoes() {
    const response = await axios.get('http://localhost:3001/doacoes')

    setDoacoes(response.data)
  }

  useEffect(() => {
    loadDoacoes()
  }, [])

  return (
    <div className="doacoes">
      <h1>Doações</h1>
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