import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/Homepage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'home', element: <HomePage /> },
      // { path: 'user', element: <UserProfilePage /> },
    ],
  },
]);

export default router;
