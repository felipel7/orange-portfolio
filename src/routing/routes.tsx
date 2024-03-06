import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import SignInPage from '../pages/Auth/SignInPage';
import SignUpPage from '../pages/Auth/SignUpPage';
import ExplorePage from '../pages/ExplorePage';
import HomePage from '../pages/Home';
import EditProjectPage from '../pages/Project/EditProjectPage';
import NewProjectPage from '../pages/Project/NewProjectPage';
import ProjectDetailsPage from '../pages/Project/ProjectDetailsPage';
import ErrorPage from './ErrorPage';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <SignInPage />,
  },
  {
    path: '/cadastro',
    element: <SignUpPage />,
  },
  {
    element: <PrivateRoutes />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <HomePage />,
            children: [
              { path: '/novo-projeto', element: <NewProjectPage /> },
              { path: '/editar-projeto/:id', element: <EditProjectPage /> },
            ],
          },
          {
            path: 'descobrir',
            element: <ExplorePage />,
          },
          {
            path: 'descobrir/:id',
            element: <ProjectDetailsPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
