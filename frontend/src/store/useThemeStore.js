import { create } from "zustand";

const useTheme = create((set) => ({
  darkMode: () => set(() => ({darkMode: localStorage.getItem("theme") === "dark"})),
  setDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export default useTheme;
