import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import HomePage from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import PrivateRoutes from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/cadastro',
    element: <RegisterPage />,
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          { index: true, element: <HomePage /> },
          // { path: 'descobrir', element: <DiscoveryPage /> },
        ],
      },
    ],
  },
]);

export default router;
