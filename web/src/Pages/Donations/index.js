import React, { useState, useEffect } from "react"

import DonationsList from '../../Components/DonationsList/'
import NavBar from '../../Components/NavBar/'
import Loading from '../../Components/Loading/'
import './style.css'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  return (
    <>
      <NavBar />
      {isLoading ? <Loading /> : <DonationsList />}
    </>
  )
} 