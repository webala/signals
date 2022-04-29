import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './signals.css'




function Signals() {

  const [signals, setSignals] = useState([])

  useEffect(() => {
    refreshSignals()
  }, [])

  const refreshSignals = async () => {
    await axios.get('/api/signals/')
    .then((res) => setSignals(res.data))
    .catch(error => alert(`error :${error}`))
  }


  return (
    <div className='signals'>

      {signals.map((signal) => {
        let className = `signal ${signal.action}`
        return (
          <div className={className}>
            <h2 className='currency'>{signal.comodity}</h2>
            <p className='mkt-range'>RANGE: {signal.mkt_range}</p>
            <p className='sl'>SL: <span>{signal.stop_loss}</span></p>
            <p className='tp'>TP1: <span>{signal.take_profit1}</span></p>
            <p className='tp'>TP2: <span>{signal.take_profit2}</span></p>
            <p className='tp'>TP3: <span>{signal.take_profit3}</span></p>
          </div>
        )
      })}

      
    </div>
  )
}

export default Signals