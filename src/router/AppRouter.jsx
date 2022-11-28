import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { LURoutes } from '../LienzoUrbano/routes/LURoutes';


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/auth/*" element={ <AuthRoutes /> } />

            <Route path="/*" element={ <LURoutes /> } />
        </Routes>
    </>
  )
}
