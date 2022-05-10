import './register.css'
import React, {useContext} from 'react'
import axios from 'axios'
import AuthContext from '../../context/AuthContext'

function Register() {

     
    const {registerUser} = useContext(AuthContext)

    const handleRegistration = (e) => {
        e.preventDefault()
        const username = e.target.username.value
    
    }

  return (
    <div className='register'>
        <h3>Create Account</h3>
        <form className='register-form' onSubmit={() => handleRegistration()}>
        <div className='input-field'>
                <label for='first_name'>First Name</label>
                <input  name='first_name' id='first_name' className='form-control w-75' type='text' required /> 
            </div>
            <div className='input-field'>
                <label for='last_name'>Last Name</label>
                <input  name='last_name' id='last_name' className='form-control w-75' type='text' required /> 
            </div>
            <div className='input-field'>
                <label for='username'>Username</label>
                <input  name='username' id='username' className='form-control w-75' type='text' required /> 
            </div>

            <div className='input-field'>
                <label for='password'>Password</label>
                <input  name='password' id='password' className='form-control w-75' type='password' required /> 
            </div>

            <div className='input-field'>
                <label for='password2'>Confirm Password</label>
                <input  name='password2' id='password2' className='form-control w-75' type='password' required /> 
            </div>

            <div className='input-field'>
                <label for='email'>Email</label>
                <input  name='email' id='email' className='form-control w-75' type='email' required /> 
            </div>
            <div className='input-field mt-4'>
                <input  className='btn btn-primary' type='submit' /> 
            </div>
        </form>
    </div>
  )
}

export default Register