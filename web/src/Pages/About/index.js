import React, { useState, useEffect } from "react"

import api from '../../services/api'
import NavBar from '../../Components/NavBar/'

export default function About() {
  const [response, setResponse] = useState([])

  async function shazam() {
    const res = await api.get('/shazam')
    setResponse(res.data)
  }

  useEffect(() => {
    shazam()
  }, [])
 
  return (
    <div>
      <NavBar />
      {response.map(x => <h1>{x.name}</h1>)}
    </div>
  )
}