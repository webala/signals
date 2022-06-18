import {useState} from 'react'
import Header from '../Header/Header'
import PostSignals from './PostSignals'
import Subscribers from './Subscribers'
import './dashboard.css'


function SellerDash() {
  const [page, setPage] = useState('signals-form')

  return (      
    <div className='dashboard'>
        <Header/>
        <div className='dash-items'>
            <a href='#'>+2547873923</a>
            <div className='dash-btns'>
                <button onClick={() => setPage('signals-form')} className='btn'>Post Signal</button>
                <button onClick={() => setPage('subscribers')} className='btn'>Subscribers</button>
            </div>
        </div>

        <div className='pages'>
          {page === 'signals-form' && <PostSignals />}
          {page === 'subscribers' && <Subscribers />}
        </div>
    </div>
  )
}

export default SellerDash