import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import DiscoveryPage from '../pages/DiscoveryPage';
import HomePage from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import ProjectSuccessPage from '../pages/ProjectSuccessPage';
import RegisterPage from '../pages/RegisterPage';
import ErrorPage from './ErrorPage';
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
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          { index: true, element: <HomePage /> },
          {
            path: 'descobrir',
            element: <DiscoveryPage />,
            children: [{ path: ':id', element: <ProjectDetailsPage /> }],
          },
          { path: 'sucesso/:title', element: <ProjectSuccessPage /> },
        ],
      },
    ],
  },
]);

export default router;
