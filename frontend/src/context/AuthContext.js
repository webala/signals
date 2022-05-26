import {createContext, useState, useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const AuthContext = createContext()

export default AuthContext


export const AuthProvider = ({children}) => {
    const [authTokens, setAuthTokens] = useState(() => 
        localStorage.getItem('authTokens') 
        ? JSON.parse(localStorage.getItem('authTokens'))
        :null
    )

    const [user, setUser] = useState(() => 
        localStorage.getItem('authTokens')
        ? jwt_decode(localStorage.getItem('authTokens'))
        : null
    )

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const loginUser = async (username, password, setError) => {
        const auth_data = JSON.stringify({
            username,
            password
        })
        let res
        await axios.post('/auth/token/', auth_data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.status === 200) {
                setAuthTokens(response.data)
                setUser(jwt_decode(response.data.access))
                localStorage.setItem('authTokens', JSON.stringify(response.data))
                navigate('/')
            }  
        }).catch(error => {
            if (error.response.status === 500) {
                res = {'message': 'Server error. Please try again later'}
                setError(res)
            } else if (error.response.status === 401) {
                res = {'message': 'Incorrect username or password'}
                setError(res)
            } else if (error.response.status >= 400 && error.response.status < 500){
                res = {'message': 'Error. Please check input fields and try again'}
                setError(res)
            }
        })        
        
    }

    const registerUser = async (
        username, 
        password, 
        password2, 
        email, 
        first_name, 
        last_name,
        user_type,
        setErrors,
        next
        ) => {
            console.log('register user called')
            const reg_data = JSON.stringify({
                username, 
                password, 
                password2, 
                email, 
                first_name, 
                last_name,
                user_type
            })

            if (password !== password2) {
                alert('The two password fields must match')
                return
            }

            let res
            await axios.post('/auth/register/', reg_data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) =>{
                if (response.status >= 200 && response.status < 300) {
                    res = {'message': 'Success'}
                    if (next === 'merchant') {
                        navigate('/merchant/create')
                    }
                    else {
                        navigate('/')
                    }
                } 
            }).catch(error => {
                if (error.response.status === 500) {
                    res = {'message': 'Server error. Please try again later'}
                    setErrors(res)
                }else if (error.response.status === 400){
                    res = {'message': 'Username or email already in use.'}
                    setErrors(res)
                }
                else if (error.response.status >= 400 && error.response.status < 500){
                    res = {'message': 'Error. Please check input fields and try again'}
                    setErrors(res)
                }
            })

            return res
    }

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/')
    }

    const contextData = {
        user,
        setUser,
        authTokens,
        setAuthTokens,
        registerUser,
        loginUser,
        logoutUser
    }

    useEffect(() => {
        if (authTokens){
            setUser(jwt_decode(authTokens.access))
        }
        setLoading(false)
    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}