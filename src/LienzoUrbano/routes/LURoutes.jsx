import { Navigate, Route, Routes } from 'react-router-dom';
import { Navegation, Chat, Profile } from '../../LienzoUrbano/pages';
import { Index2, Signup } from 'LienzoUrbano/temp';
import { LUPage } from 'LienzoUrbano/pages/LUPage';

export const LURoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={ <Navegation /> } />            
            {/* <Route path="/navigation" element={ <Navegation /> } /> */}
            <Route path="/profile" element={ <Profile /> } />            
            <Route path="/chat" element={ <Chat /> } />
            {/* <Route path="/preview" element={ <Navegation /> } /> */}
            

            {/* <Route path="/*" element={ <Navigate to="/" /> } /> */}
        </Routes>
    
    </>
  )
}
