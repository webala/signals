import React, {useContext} from 'react'
import './header.css'
import {BiMenu} from 'react-icons/bi'
import AuthContext from '../../context/AuthContext'
import { Link } from 'react-router-dom'

function Header() {

  
  return (
    <header className='header'>
        <h1>4x Trader</h1>
        <nav className='navigation'>
          <ul>
            <li><Link to="/login">Sign In </Link></li>
            <li><Link to='/register'>Join 4x </Link></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header