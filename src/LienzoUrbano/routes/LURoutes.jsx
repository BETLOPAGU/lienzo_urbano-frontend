import { Navigate, Route, Routes } from 'react-router-dom';
import { ProfilePage, Navegation, Chat } from '../../LienzoUrbano/pages';
import { Index2, Signup } from 'LienzoUrbano/temp';
import { LUPage } from 'LienzoUrbano/pages/LUPage';

export const LURoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={ <LUPage /> } />            
            {/* <Route path="/navigation" element={ <Navegation /> } /> */}
            <Route path="/singup" element={ <Signup /> } />
            <Route path="/profile" element={ <ProfilePage /> } />
            <Route path="/chat" element={ <Chat /> } />
            {/* <Route path="/preview" element={ <Navegation /> } /> */}
            

            {/* <Route path="/*" element={ <Navigate to="/" /> } /> */}
        </Routes>
    
    </>
  )
}
