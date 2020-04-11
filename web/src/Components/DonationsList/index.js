import React, { useState, useEffect } from "react"
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
                                <li> <strong>Nome: </strong>{x.doador_data.username}</li>
                                <li><strong>Endereço: </strong> {x.doador_data.endereco}</li>
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