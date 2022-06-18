import React from 'react'
import Header from '../Header/Header'
import PostSignals from './PostSignals'
import './dashboard.css'


function SellerDash() {
  

  return (      
    <div className='dashboard'>
        <Header/>

        <div className='dash-items'>
            <a href='#'>+2547873923</a>
            <div className='dash-btns'>
                <button className='btn'>Subscribers</button>
                <button className='btn'>Post Signal</button>
            </div>
        </div>
        {/* <PostSignals /> */}
    </div>
  )
}

export default SellerDash