import React, {useState, useContext} from 'react'
import './register.css'
import axios from 'axios'
import useAxios from '../../utils/useAxios'


function CreateSeller() {

  const [number, setNumber] = useState('')

  const api = useAxios()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Handle submit called')

    const data = JSON.stringify({
      m_pesa_phone_number: number
    })
    api.post('/mpesa_no/add/', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => console.log(response.data))
    .catch(error => console.log(error))
  }
  return (
    <div className='mt-4'>
      <h3>Add Your M-pesa number</h3>
      <p className='text-sm text-info'>This number can be changed in the future</p>
      <form className='register-form' onSubmit={handleSubmit}>
          <div className='input-field'>
              <label for='last_name'>M-pesa number</label>
              <input onChange={(e) => setNumber(e.target.value)} name='number' id='number' className='form-control w-75' type='text' required /> 
          </div>

          <div className='input-field mt-4'>
              <input  className='btn btn-primary' type='submit' /> 
          </div>
      </form>
    </div>
  )
}

export default CreateSeller