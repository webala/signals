import './login.css'
import React, {useContext, useState} from 'react'
import AuthContext from '../../context/AuthContext'

function Login() {

    const [error, setError] = useState({})
    const {loginUser} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value

        username.length > 0 && loginUser(username, password, setError)
    }
    
  return (
    <div className='login' onSubmit={() => handleLogin()}>
        <h3>Login</h3>
        <form className='login-form' onSubmit={handleLogin}>
            <div className='input-field'>
                {error && <span className='text-danger text-sm mb-4'>{error.message}</span>}
            </div>
            <div className='input-field'>
                <label for='username'>Username</label>
                <input name='username' id='username' className='form-control w-75' type='text' required /> 
            </div>

            <div className='input-field'>
                <label for='password'>Password</label>
                <input name='password' id='password' className='form-control w-75' type='password' required /> 
            </div>
            <div className='input-field mt-4'>
                <input  className='btn btn-primary' type='submit' /> 
            </div>
        </form>
    </div>
  )
}

export default Login