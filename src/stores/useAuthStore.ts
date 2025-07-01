import { create } from 'zustand';

type User = {
  nickname: string | null;
};

interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>(set => ({
  user: null,
  setUser: user => {
    const minimalUser = { nickname: user.nickname ?? null };
    localStorage.setItem('user', JSON.stringify(minimalUser));
    set({ user: minimalUser });
  },
  clearUser: () => {
    localStorage.removeItem('user');
    set({ user: null });
  },
}));
