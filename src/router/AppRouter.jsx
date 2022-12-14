import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useQuery, gql } from '@apollo/client';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { LURoutes } from '../LienzoUrbano/routes/LURoutes';
import { useAuthStore } from '../hooks';


export const AppRouter = () => {

  // const { status, checkAuthToken } = useAuthStore();

  // useEffect(() => {
  //   checkAuthToken();
  // }, [])

  const authStatus = 'authenticated';


  return (

    <Routes>
      {
        (authStatus === 'authenticated')
          ?(
            <>
              <Route path="/auth/*" element={<AuthRoutes />} />
              <Route path="/*" element={<Navigate to="/auth/welcome" />} />
            </>
          )
          :(
            <>
              <Route path="/auth/*" element={<AuthRoutes />} />
              <Route path="/auth/*" element={<AuthRoutes />} />
            </>
          )
      }
    </Routes>

  )
}
