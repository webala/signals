import React, {useContext} from 'react'
import './header.css'
import {BiMenu} from 'react-icons/bi'
import AuthContext from '../../context/AuthContext'
import { Link } from 'react-router-dom'

function Header() {

  const {user, logoutUser} = useContext(AuthContext)
  console.log('User: ', user)
  return (
    <header className='header'>
        <h1>SGL</h1>
        {user?.username? (
          <p>Hello {user.username}</p>
        )
      : <Link to='/login'>Login</Link>
      } 
        <BiMenu className='menu-icon'/>
    </header>
  )
}

export default Header