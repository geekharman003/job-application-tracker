import { create } from "zustand";

const useTheme = create((set) => ({
  darkMode: false,
  setDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export default useTheme;
