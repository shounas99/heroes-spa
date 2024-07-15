import { Navigate, Route, Routes } from 'react-router-dom'
import { DCPage, HeroPage, MarvelPage, SearchPage } from '../pages'

export const HeroesRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Navigate to="/marvel" /> } /> 
                <Route path="/marvel" element={ <MarvelPage/> }/> 
                <Route path="/dc" element={ <DCPage/>} /> 
                <Route path="/search" element={ <SearchPage/>} /> 
                <Route path="/hero/:id" element={ <HeroPage/>} />
            </Routes>
        </>
    )
}
