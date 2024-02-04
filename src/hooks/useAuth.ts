import userStore from '../store/userStore';
import useLocalStorage from './useLocalStorage';

export default function useAuth() {
  const { getItem, setItem } = useLocalStorage();
  const { clearUser } = userStore();

  const token = getItem('token');

  const isAuthenticated = !!token || true;

  const logout = () => {
    clearUser();
    setItem('token', null);
  };

  return { isAuthenticated, logout };
}
