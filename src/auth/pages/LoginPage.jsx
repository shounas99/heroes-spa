import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

export const LoginPage = () => {
    //use del context
    const { login } = useContext( AuthContext )
    const navigate = useNavigate()

    const onLogin = () => {

        login('Cris A')

        navigate('/', {
            replace: true
        })
    }
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={ onLogin }
            >
                Login
            </button>
        </div>
    )
}
