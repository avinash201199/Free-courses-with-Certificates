import { create } from "zustand";

export const useStore = create((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user: user })),
  removeAllBears: () => set(null),
}));
