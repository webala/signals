import React from 'react'
import Header from '../Header/Header'
import './home.css'
import chart from '../../assets/chart.jpg'

function Home() {
  return (
    <div className='home'>
        <Header />
       <section className='landing-section'>
           <img src={chart} alt='chart-img' className='chart-img' />
           <h1 className='intro'>"Your one stop shop for forex signals"</h1>
        </section> 

        <section className='buy-section'>
            <h2>Buy signals</h2>
            <p>Subscribe to top forex traders to get signals in real time.</p>
            <button class='btn btn-primary btn-sm'>Get started</button>
        </section>

        <section className='trade-section'>
            <h2>Sell signals</h2>
            <p>Share real time forex signals to clients on a subscription basis.</p>
            <button class='btn btn-primary btn-sm'>Get started</button>
        </section>
    </div>
  )
}

export default Home