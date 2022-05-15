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

    const loginUser = async (username, password) => {
        const auth_data = JSON.stringify({
            username,
            password
        })
        
        const response = await axios.post('/auth/token/', auth_data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const res_data = await response.data

        if (response.status === 200) {
            setAuthTokens(res_data)
            setUser(jwt_decode(res_data.access))
            localStorage.setItem('authTokens', JSON.stringify(res_data))
            navigate('/')
        } else {
            alert('Something went wrong')
        }
    }

    const registerUser = async (
        username, 
        password, 
        password2, 
        email, 
        first_name, 
        last_name
        ) => {
            console.log('register user called')
            const reg_data = JSON.stringify({
                username, 
                password, 
                password2, 
                email, 
                first_name, 
                last_name
            })
            const response = await axios.post('/auth/register/', reg_data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (response.status === 201) {
                navigate('/login')
            } else {
                alert('Something went wrong')
            }
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