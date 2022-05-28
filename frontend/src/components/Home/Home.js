import React, { useContext } from 'react'
import Header from '../Header/Header'
import './home.css'
import chart from '../../assets/chart.jpg'
import {Link} from 'react-router-dom'
import useAxios from '../../utils/useAxios'
import AuthContext from '../../context/AuthContext'

function Home() {

  const api = useAxios()
  const {authTokens} = useContext(AuthContext)

  const handleTest = () => {
    api.get('/test/').then(response => console.log(response.data))
    .catch(error => console.log(error))
  }

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
            <button class='btn btn-primary btn-sm'><Link className='link' to={{pathname: '/register'}} state={{next: 'buyer'}}>Get started</Link></button>
        </section>

        <section className='trade-section'>
            <h2>Sell signals</h2>
            <p>Share real time forex signals to clients on a subscription basis.</p>
            <button class='btn btn-primary btn-sm'><Link className='link' to={{pathname: '/register'}} state={{next: 'merchant'}}>Get started</Link></button>
        </section>

        <button onClick={handleTest} className='btn btn-primary test-btn'>Test</button>
    </div>
  )
}

export default Home