import Login from '../pages/Login';
import { createBrowserRouter } from 'react-router-dom';
import AuthRoutes from '../middleware/AuthRoutes';
import App from './App';
import Home from '../pages/Home';

const AllRoutes = () => {

  const routes = createBrowserRouter([
    {
      element: <App />,
      children: [{
        path: "/",
        element: <AuthRoutes> <Home /></AuthRoutes>
      }, {
        path: "/login",
        element: <Login />
      }]
    }
  ]);

  return routes;
}

export default AllRoutes