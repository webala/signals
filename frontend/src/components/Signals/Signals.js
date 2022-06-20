import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './signals.css'
import Signal from './Signal'




function Signals({username}) {

  const [signals, setSignals] = useState([])

  const refreshSignals = async () => {
    await axios.get(`/api/signals/${username}`)
    .then((res) => {
      console.log(res.data)
      setSignals(res.data)})
    .catch(error => alert(`error :${error}`))
  }

  useEffect(() => {
    refreshSignals()
  }, [])

  
  return (
      <div> {signals.map((signal) => {
        return (
          <Signal key={signals.indexOf(signal)} signal={signal} />
        )
      })}</div>
      )
}

export default Signals