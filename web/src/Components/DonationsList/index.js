import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'


import api from '../../services/api'

import './style.css'

import tshirt from './assets/t-shirt.svg'
import basicbasket from './assets/basicbasket.svg'

export default function Home() {
    const [donations, setDonations] = useState([])

    async function loadDonations() {
        const response = await api.get('/search', { params: { latitude: -9.3891154, longitude: -40.4897314 } });
        setDonations(response.data)
    }

    useEffect(() => {
        loadDonations()
    }, [])

    return (
        <div className="donations-container">
            <div className='donations-list'>
                {donations.map((x) =>
                    <div key={x._id} className="item">
                        <div className='container-1'>
                            <img className="icon" alt="icon" src={x.doacao_data.tipo === 'alimento' ? basicbasket : tshirt} />
                            <ul className='donation-data'>
                                <li> <strong>Nome: </strong><span>{x.doador_data.username}</span></li>
                                <li><strong>Endereço: </strong><span> {x.doador_data.endereco}</span></li>
                                <li><span>{x.doador_data.cidade}</span></li>
                            </ul>
                        </div>
                        <div className='container-2'>
                            <Link to={`/donations/` + x._id}>Acessar</Link>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}