import './register.css'
import React, {useContext, useState} from 'react'
import AuthContext from '../../context/AuthContext'
import {useLocation, useNavigate} from 'react-router-dom'

function Register(props) {

     const [errors, setErrors] = useState({})
     const [password, setPassword] = useState()
     const [password2, setPassword2] = useState()
     const [email, setEmail] = useState()
     const [username, setUsername] = useState()
     const [first_name, setFirst_name] = useState()
     const [last_name, setLast_name] = useState()

        const {registerUser} = useContext(AuthContext)
    
    const location = useLocation()
    const {next} = location.state
    console.log('next:', next)

    const handleRegistration = (e) => {
        e.preventDefault()
        console.log('Handle register called')
        registerUser(
            username,
            password,
            password2,
            email,
            first_name,
            last_name,
            setErrors,
            next
        )
        
    }

  return (
    <div className='register'>
        <h3>Create Account</h3>
        <form className='register-form' onSubmit={handleRegistration} method='POST'>
            <div className='input-field'>
               {errors && <span className='text-danger text-sm mb-4'>{errors.message}</span>}
            </div>
            <div className='input-field'>
                <label for='first_name'>First Name</label>
                <input onChange={(e) => setFirst_name(e.target.value)} name='first_name' id='first_name' className='form-control w-75' type='text' required /> 
            </div>
            <div className='input-field'>
                <label for='last_name'>Last Name</label>
                <input onChange={(e) => setLast_name(e.target.value)} name='last_name' id='last_name' className='form-control w-75' type='text' required /> 
            </div>
            <div className='input-field'>
                <label for='username'>Username</label>
                <input onChange={(e) => setUsername(e.target.value)} name='username' id='username' className='form-control w-75' type='text' required /> 
            </div>

            <div className='input-field'>
                <label for='password'>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} name='password' id='password' className='form-control w-75' type='password' required /> 
            </div>

            <div className='input-field'>
                <label for='password2'>Confirm Password</label>
                <input onChange={(e) => setPassword2(e.target.value)} name='password2' id='password2' className='form-control w-75' type='password' required /> 
            </div>

            <div className='input-field'>
                <label for='email'>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} name='email' id='email' className='form-control w-75' type='email' required /> 
            </div>
            <div className='input-field mt-4'>
                <input  className='btn btn-primary' type='submit' /> 
            </div>
        </form>
    </div>
  )
}

export default Register