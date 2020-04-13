import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Loading from '../../Components/Loading/'
import NavBar from '../../Components/NavBar'
import DonationDescription from '../../Components/DonationDescription'

import './style.css'

export default function SingleDonation() {
    const [id] = useState(useParams().id)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000)
    }, [])

    return (
        <div className="container">
            <NavBar />
            {isLoading ? <Loading /> : <DonationDescription donationId={id} />}
        </div>
    )
}