import { useAlertStore } from './index';
const UId = () => '_' + Math.random().toString(36).substr(2, 9);

const todosStore = (set, get) => ({
  todos: [],
  addNew: (todoData) => {
    set({ todos: [...get().todos, { ...todoData, id: UId() }] });
    // Alert on success addd
    useAlertStore.setState({ alert: { show: true, type: 'success', message: `Added ${todoData.label}` } });
  },
  removeTodo: (id) => set({ todos: get().todos.filter(item => item.id !== id) }),
  removeAll: () => { },
  getStorage: () => sessionStorage,
});

export default todosStore;