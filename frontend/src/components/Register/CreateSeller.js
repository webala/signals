import React, {useState} from 'react'
import './register.css'

function CreateSeller() {

  const [number, setNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Handle submit called')
  }
  return (
    <div className='mt-4'>
      <h3>Add Your M-pesa number</h3>
      <p className='text-sm text-info'>This number can be changed in the future</p>
      <form className='register-form' onSubmit={handleSubmit}>
          <div className='input-field'>
              <label for='last_name'>M-pesa number</label>
              <input onChange={(e) => setNumber(e.target.value)} name='last_name' id='last_name' className='form-control w-75' type='text' required /> 
          </div>

          <div className='input-field mt-4'>
              <input  className='btn btn-primary' type='submit' /> 
          </div>
      </form>
    </div>
  )
}

export default CreateSeller