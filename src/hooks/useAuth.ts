import userStore from '../store/userStore';
import useLocalStorage from './useLocalStorage';

export default function useAuth() {
  const { getItem, setItem } = useLocalStorage();
  const { clearUser } = userStore();

  const token = getItem('token');
  const user = getItem('user');

  const isAuthenticated = !!token && user;

  const logout = () => {
    clearUser();
    setItem('token', null);
  };

  return { isAuthenticated, logout };
}
