import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import NavBar from '../../Components/NavBar'
import DonationDescription from '../../Components/DonationDescription'

import './style.css'

export default function SingleDonation() {
    const [id] = useState(useParams().id)

    return (
        <div className="container">
            <NavBar />
            <DonationDescription donationId={id} />
        </div>
    )
}