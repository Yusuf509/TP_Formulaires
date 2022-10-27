import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Dashbord() {
    const location = useLocation()
  return (
    <div>
        <h1>Bonjour {location.state.nom}</h1>

    </div>
  )
}
