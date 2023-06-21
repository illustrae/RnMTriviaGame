import {Outlet, Navigate} from 'react-router-dom'

import {useEffect} from 'react'

 
const PrivateRoutes = ({ auth, setAuth }) => {
  
  useEffect(() => {
    
    const userToken = document.cookie.valueOf
    
    const getUserToken = () => {
      
      if (userToken) {
        setAuth({ userToken: true });
      } else {
        setAuth({ userToken: false });
      }
    };
    getUserToken();
    
    

  }, []);
    
  return (
    auth.userToken ? <Outlet/> : <Navigate to='/login' />
  )
}

export default PrivateRoutes


