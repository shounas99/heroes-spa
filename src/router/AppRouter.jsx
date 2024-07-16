import { HeroesRoutes } from '../heroes'
import { LoginPage } from "../auth"
import { Navbar } from "../ui"
import { Route, Routes } from "react-router"
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    {/* -----Explicit-----*/}
                    <Route path="login/*" element={
                        <PublicRoute>
                            <Routes>
                                <Route path='/*' element={ <LoginPage/> }/>
                            </Routes>
                            {/* <LoginPage/> */}
                        </PublicRoute>
                    }/>
                    {/* -----By modules----- */}
                    <Route path="/*" element ={
                        <PrivateRoute >
                            <HeroesRoutes/>
                        </PrivateRoute>
                    } />
                    {/* <Route path='/login' element={ <LoginPage/> }/> */}
                    {/* <Route path='/*' element={ <HeroesRoutes /> }/> */}
                </Routes>
            </div>
        </>
    )
}
