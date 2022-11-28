import { Navigate, Route, Routes } from 'react-router-dom';
import { WelcomePage, RegisterPage, LoginPage } from '../pages';


export const AuthRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/welcome" element={ <WelcomePage /> } />
            <Route path="/register" element={ <RegisterPage /> } />
            <Route path="/login" element={ <LoginPage /> } />

            <Route path="/*" element={ <Navigate to="/auth/welcome"/> } />
        </Routes>
    </>
  )
}
