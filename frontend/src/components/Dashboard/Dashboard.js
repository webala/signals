import React, {useRef} from 'react'
import Header from '../Header/Header'
import './dashboard.css'
import axios from 'axios'

function Dashboard() {

    let commodity = useRef()
    let mktRange = useRef()
    let sl = useRef()
    let tp1 = useRef()
    let tp2 = useRef()
    let tp3 = useRef()


    const handleSubmit = async (e) => {
        e.preventDefault()

        let action = document.querySelector('input[name="action"]:checked').value
        console.log(action)
        axios.post('/api/signals/',{
            comodity: commodity.current.value,
            mkt_range: mktRange.current.value,
            stop_loss: sl.current.value,
            take_profit1: tp1.current.value,
            take_profit2: tp2.current.value,
            take_profit3: tp3.current.value,
            action: action
        })
    }

  return (      
    <div className='dashboard'>
        <Header/>
        <form className='signals-form' onSubmit={handleSubmit}>
            <h2>Post Signal</h2>
            <div className='form-field'>
                <input ref={commodity} type='text' placeholder='Comodity' required/>
            </div>
            <div className='form-field'>
                <input ref={mktRange} type='text' placeholder='Market Range' required/>
            </div>
            <div className='form-field'>
                <input ref={sl} type='number' placeholder='Stop Loss' required/>
            </div>
            <div className='form-field'>
                <input ref={tp1} type='number' placeholder='Take Profit' required/>
            </div>
            <div className='form-field'>
                <input ref={tp2} type='number' placeholder='Take Profit' required/>
            </div>
            <div className='form-field'>
                <input ref={tp3} type='number' placeholder='Take Profit' required/>
            </div>
            <div className='form-field'>
                <label>Buy<input name='action' type='radio' placeholder='Buy' value='BUY'/></label>
                <label>Sell<input name='action' type='radio' placeholder='Sell' value='SELL'/></label>
            </div>

            <div className='form-field'>
                <input type='submit' />
            </div>
        </form>
    </div>
  )
}

export default Dashboard