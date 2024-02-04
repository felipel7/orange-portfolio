import useLocalStorage from './useLocalStorage';

export default function useAuth() {
  const { getItem, setItem } = useLocalStorage();

  const user = getItem('token');

  const isAuthenticated = !!user;

  const logout = () => {
    setItem('token', null);
  };

  return { isAuthenticated, logout };
}
