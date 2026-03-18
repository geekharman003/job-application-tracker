import { create } from "zustand";

const useAuth = create((set) => ({
  authUser: null,
  setAuthUser: (user) => set({ authUser: user }),
}));

export default useAuth;
