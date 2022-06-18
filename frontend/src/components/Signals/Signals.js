import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './signals.css'
import Signal from './Signal'




function Signals() {

  const [signals, setSignals] = useState([])

  useEffect(() => {
    //refreshSignals()
  })

  const refreshSignals = async () => {
    await axios.get('/api/signals/')
    .then((res) => setSignals(res.data))
    .catch(error => alert(`error :${error}`))
  }


  return (
      <div> {signals.map((signal) => <Signal signal={signal} />)}</div>
      )
}

export default Signals