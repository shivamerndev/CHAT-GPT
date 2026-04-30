import Login from '../pages/Login';
import { createBrowserRouter } from 'react-router-dom';
import AuthRoutes from '../middleware/AuthRoutes';
import App from './App';

const AllRoutes = () => {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <AuthRoutes>
          <App />
        </AuthRoutes>
      )
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);

  return routes;
}

export default AllRoutes