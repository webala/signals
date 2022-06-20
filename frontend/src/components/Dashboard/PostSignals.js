import React, {useState, useContext} from 'react'
import useAxios from '../../utils/useAxios'
import Signals from '../Signals/Signals'
import AuthContext from '../../context/AuthContext'

function PostSignals() {

    const [sl, setSl] = useState()
    const [commodity, setCommodity] = useState()
    const [mktRange, setMktRange] = useState()
    const [tp1, setTp1] = useState()
    const [tp2, setTp2] = useState()
    const [tp3, setTp3] = useState()
    const [action, setAction] = useState()

    const authContext = useContext(AuthContext)
    const {user} = authContext
    console.log("user: ", user.username)


    const api = useAxios()

    const handleSubmit = async (e) => {
        e.preventDefault()
        api.post('/api/signals/',{
            comodity: commodity,
            mkt_range: mktRange,
            stop_loss: sl,
            take_profit1: tp1,
            take_profit2: tp2,
            take_profit3: tp3,
            action: action
        })
    }

    
  return (
    <div className='post-signals'>
        <div className='signals'>
            <h1>Your Signals</h1>
          <Signals username={user.username}/>
        </div>
        <form className='signals-form' onSubmit={handleSubmit}>
            <h2>Post Signal</h2>
            <div className='form-field'>
                <label>Comodity</label>
                <input onChange={e => setCommodity(e.target.value)} type='text' placeholder='Comodity' required/>
            </div>
            <div className='form-field'>
                <label>Market Range</label>
                <input onChange={e => setMktRange(e.target.value)} type='text' placeholder='Market Range' required/>
            </div>
            <div className='form-field'>
            <label>Stop Loss</label>
                <input onChange={e => setSl(e.target.value)} type='number' placeholder='Stop Loss' required/>
            </div>
            <div className='form-field'>
                <label>Take Profit 1</label>
                <input onChange={e => setTp1(e.target.value)} type='number' placeholder='Take Profit 1' required/>
            </div>
            <div className='form-field'>
                <label>Take Profit 2</label>
                <input onChange={e => setTp2(e.target.value)} type='number' placeholder='Take Profit' required/>
            </div>
            <div className='form-field'>
                <label>Take Profit 3</label>
                <input onChange={e => setTp3(e.target.value)} type='number' placeholder='Take Profit' required/>
            </div>
            <div className='form-field'>
                <label>Buy<input onClick={e => setAction(e.target.value)} name='action' type='radio' placeholder='Buy' value='BUY'/></label>
                <label>Sell<input onClick={e => setAction(e.target.value)} name='action' type='radio' placeholder='Sell' value='SELL'/></label>
            </div>

            <div className='form-field'>
                <button type='sumit' className='btn btn-primary'>Post Signal</button>
            </div>
        </form>
    </div>
  )
}

export default PostSignals