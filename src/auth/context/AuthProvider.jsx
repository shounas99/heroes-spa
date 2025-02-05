import { useReducer } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'
import { types } from '../types/types'

// const initialState = {
//     logged: false
// }
const init = () => {
    const user = JSON.parse( localStorage.getItem('user'));
    return {
        //regresar true si existe user
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({ children }) => {
    const [ authState, dispatch ] = useReducer( AuthReducer, {}, init)
    
    const login = ( name = '') => {
        const user = { id: 'ABC', name }

        const action = {
            type: types.login,
            payload: user
            
        }
        localStorage.setItem('user', JSON.stringify( user ))
        dispatch( action )
    }

    const logout = () => {
        localStorage.removeItem('user')
        const action = { type: types.logout }
        dispatch( action )
    }

    return (
        <AuthContext.Provider value= {{ 
            ...authState,
            login: login,
            logout: logout
        }}>
            { children }
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.any
}