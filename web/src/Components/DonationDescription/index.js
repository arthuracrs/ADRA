import React, { useState, useEffect } from 'react'
import api from '../../services/api'

import ImageGalery from '../ImageGalery/'

import './style.css'

export default function SingleDonation(props) {
    const [id] = useState(props.donationId)
    const [response, setResponse] = useState([])

    async function shazam() {
        const res = await api.get(`/donations/${id}`)
        setResponse(res.data)
    }

    useEffect(() => {
        shazam()
    })

    return (
        <div className="ghost-container">
            <div className="donation-description" >
                {response.map(x =>
                    <ul className='grid-list' key={x._id}>
                        <li>
                            <strong className="title">Fotos: </strong><br /><br />
                            <ImageGalery/>
                        </li>
                        <li>
                            <strong className="title">Informações: </strong><br />
                            <strong className="sub-p">Descrição: </strong>
                            <span>{x.doacao_data.descricao}</span><br />
                            <strong className="sub-p">Tipo: </strong>
                            <span>{x.doacao_data.tipo}</span><br />
                            <strong className="sub-p">Data: </strong>
                            <span>{x.doacao_data.data}</span><br />
                            <strong className="sub-p">Horário: </strong>
                            <span>{x.doacao_data.horario}</span><br />
                        </li>
                        <li>
                            <strong className='title'>Doador: </strong><br />
                            <strong className="sub-p">nome: </strong>
                            <span>{x.doador_data.username}</span>
                        </li>
                    </ul>
                )}
            </div>
        </div>

    )
}