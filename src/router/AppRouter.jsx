import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';


import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { LURoutes } from '../LienzoUrbano/routes/LURoutes';
import { useAuthStore } from '../hooks/useAuthStore';


export const AppRouter = () => {

  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, [])

  if (status === 'checking') {
    return (
      <h3>Cargando...</h3>
    )
  }

  return (
    <Routes>
      {
        (status === 'not-authenticated')
          ? (
            <>
              <Route path="/auth/*" element={<AuthRoutes />} />
              <Route path="/*" element={<Navigate to="/auth/welcome" />} />
            </>
          )
          : (
            <>
              <Route path="/" element={<LURoutes />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </>
          )
      }
    </Routes>
  )
}
