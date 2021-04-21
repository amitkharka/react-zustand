const themeStore = (set) => ({
  isDarkTheme: false,
  setDarkTheme: (isDark) => set({ isDarkTheme: isDark }),
});

export default themeStore;