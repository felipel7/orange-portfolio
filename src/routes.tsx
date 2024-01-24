import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/Home';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: 'user', element: <UserProfilePage /> },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default router;
