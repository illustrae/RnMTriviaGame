import {Outlet, Navigate, useLocation} from 'react-router-dom'
import { useEffect } from 'react';

const PrivateRoutes = ({ auth }) => {
    const location = useLocation();

  return (
  
    auth.userToken ? <Outlet/> : <Navigate to='/login' state={{prev:location.pathname}} />
  )
}

export default PrivateRoutes


