import React from 'react'
import './header.css'
import {BiMenu} from 'react-icons/bi'

function Header() {
  return (
    <header className='header'>
        <h1>SGL</h1>
        <BiMenu className='menu-icon'/>
    </header>
  )
}

export default Header