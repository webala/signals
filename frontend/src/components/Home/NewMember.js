import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header/Header'
import './home.css'
import {Link} from 'react-router-dom'
import useAxios from '../../utils/useAxios'
import AuthContext from '../../context/AuthContext'
import {useNavigate} from 'react-router-dom'

function NewMember() {

  const [userType, setUserType] = useState()
  const api = useAxios()
  const navigate = useNavigate()
  const authContext = useContext(AuthContext)
  const {authTokens} = authContext

  const handleTest = () => {
    api.get('/test/').then(response => console.log(response.data))
    .catch(error => console.log(error))
  }

  async function getUserType () {
    await api.get('/user_type/')
    .then(res => {
     setUserType(res.data.user_type)  
    })
    .catch(error => console.log(error))  
    
  }
  

  useEffect(() => {
    getUserType()
    
    if (authTokens){
      console.log(userType)
      if(userType === 'seller') { 
        navigate('/dashboard')
      }else if (userType === 'buyer'){
        navigate('/home')
      }
    }
  }, [userType])

  return (
    <div className='home'>
        <Header />
       
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

export default NewMember