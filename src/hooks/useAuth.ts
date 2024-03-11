import { googleLogout } from '@react-oauth/google';
import useLocalStorage from './useLocalStorage';

export default function useAuth() {
  const { getItem, setItem } = useLocalStorage();

  const token = getItem('token');

  const isAuthenticated = !!token;

  const logout = () => {
    googleLogout();
    setItem('token', null);
  };

  return { isAuthenticated, logout };
}
