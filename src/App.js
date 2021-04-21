import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllTodos from './pages/all-todos';
import TodaysTodo from './pages/todays-todo';
import NewTodo from './components/new-todo';
import Alert from './components/alert';
import { useThemeStore } from './store';

import './App.css';

function App() {
  const isDarkTheme = useThemeStore(state => state.isDarkTheme);
  const setDarkTheme = useThemeStore(state => state.setDarkTheme);

  useEffect(() => {
    const body = document.body;
    if (body) {
      if (isDarkTheme) {
        body.classList.add('app--dark');
      } else {
        body.classList.remove('app--dark');
      }
    }
  }, [isDarkTheme]);


  return (
    <Router>
      <div className="app">
        <Alert />
        <nav className="app-navigation">
          <ul className="app-navigation__items">
            <li className="app-navigation__item">
              <Link to="/">All Todos</Link>
            </li>
            <li className="app-navigation__item">
              <Link to="/todays-todo">Todays Todo</Link>
            </li>
          </ul>
          <div className="app-theme-selector">
            <label htmlFor="app-theme">Dark Mode</label>
            <input
              id="app-theme"
              type="checkbox"
              checked={isDarkTheme}
              onChange={(event) => setDarkTheme(event.currentTarget.checked)}
            />
          </div>
        </nav>
        <div className="app-container">
          <div className="app-left-pane">
            <NewTodo />
          </div>
          <div className="app-right-pane">
            <Switch>
              <Route path="/todays-todo">
                <TodaysTodo />
              </Route>
              <Route path="/">
                <AllTodos />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
