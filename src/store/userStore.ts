import { create } from 'zustand';

interface IUserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const useStore = create<IUserStore>(set => ({
  user: {} as User,
  setUser: (user: User) => set(() => ({ user })),
  clearUser: () => set(() => ({ user: null })),
}));

export default useStore;
