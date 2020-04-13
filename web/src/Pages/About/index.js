import React, { useState, useEffect } from "react"

import api from '../../services/api'
import NavBar from '../../Components/NavBar/'
import Loading from '../../Components/Loading/'

export default function About() {
  const [response, setResponse] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function shazam() {
    const res = await api.get('/shazam')
    setResponse(res.data)
  }

  useEffect(() => {
    shazam()
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  return (
    <div>
      <NavBar />
      {isLoading ? <Loading /> : response.map(x => <h1>{x.name}</h1>)}
    </div>
  )
}