import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import themeStore from './theme';
import todosStore from './todos';
import alertStore from './alert';

// start redux devtool
export const useAlertStore = create(devtools(alertStore));
// Persist todos in localstorage
export const useTodosStore = create(persist(devtools(todosStore)));
// Persist theme in localstorage
export const useThemeStore = create(persist(devtools(themeStore)));