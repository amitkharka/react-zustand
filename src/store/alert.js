
const alertStore = (set) => ({
  alert: {},
  showAlert: (alertData) => set({ alert: alertData }),
  hideAlert: () => set({ alert: {} }),
});

export default alertStore;