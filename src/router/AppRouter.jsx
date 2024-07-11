import { HeroesRoutes } from '../heroes'
import { LoginPage } from "../auth"
import { Navbar } from "../ui"
import { Route, Routes } from "react-router"

export const AppRouter = () => {
    return (
        <>
        <Navbar />
        <div className='container'>
            <Routes>
                <Route path="/login" element={ <LoginPage/>} /> 
                <Route path="/*" element={ <HeroesRoutes/>} /> 
            </Routes>
        </div>
        </>
    )
}
