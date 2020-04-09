import React, { useState, useEffect } from "react"
import axios from 'axios'

export default function About() {
  const [response, setResponse] = useState([[{ name: "kakashi", id: 'aa1' }, { name: "guy", id: 'aa2' }]])

  async function shazam() {
    const res = await axios.get('http://192.168.1.6:3001/shazam')
    setResponse([{ name: "kakashi", id: 'aa1' }, { name: "guy", id: 'aa2' }])
  }

  useEffect(() => {
    shazam()
  }, [])

  return (
    <div>
      {
        response.map(x => <h1>{x.name}</h1>)
      }
    </div>
  )
}