import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Outlet } from 'react-router-dom';

const App = () => {

  const { getProfile } = useAuth();

  useEffect(() => {
    getProfile()
  }, [])


  return (<Outlet />)
}

export default App