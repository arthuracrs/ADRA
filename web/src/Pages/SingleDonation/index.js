import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import ImageGallery from 'react-image-gallery';

import NavBar from '../../Components/NavBar'

import './style.css'

export default function SingleDonation() {
    const [id] = useState(useParams().id)
    const [response, setResponse] = useState([])

    async function shazam() {
        const res = await api.get(`/donations/${id}`)
        setResponse(res.data)
    }

    useEffect(() => {
        shazam()
    })

    return (
        <div className="container">
            <NavBar />
            <div className="ghost-container">
                <div className="donation-description" >
                    {response.map(x =>
                        <ul className='grid-list' key={x._id}>
                            <li>
                                <strong className="title">Fotos: </strong><br /><br />
                                <div className='galery'>
                                    <img src="https://picsum.photos/200/300" alt="" />
                                    <img src="https://picsum.photos/200/300" alt="" />
                                    <img src="https://picsum.photos/200/300" alt="" />
                                </div>
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
        </div>
    )
}