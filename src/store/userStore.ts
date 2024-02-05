import { create } from 'zustand';
import useLocalStorage from '../hooks/useLocalStorage';

interface IUserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const useStore = create<IUserStore>(set => {
  const { setItem, getItem } = useLocalStorage();
  const storedUser = getItem('user');

  return {
    user: storedUser,
    setUser: (user: User) => {
      set({ user });
      setItem('user', user);
    },
    clearUser: () => {
      set({ user: null });
      setItem('user', null);
    },
  };
});

export default useStore;
