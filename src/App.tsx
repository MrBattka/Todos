import React, { useEffect, useReducer } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import ActiveTask from './components/AllTasks/ActiveTask/ActiveTask';
import AllTask from './components/AllTasks/AllTask';
import CompletedTask from './components/AllTasks/CompletedTask/CompletedTask';
import styles from './App.module.css';
import Navbar from './components/Footer/Footer';
import NewTask from './components/NewTask/NewTask';
import { Action, ContextState, State } from "./state/ContextTypes";
import todoReducer, { ContextApp, initialState } from './state/task-reduser';

const App: React.FC = () => {
  const [state, changeState] = useReducer<React.Reducer<State, Action>>(todoReducer, initialState)
  const navigate = useNavigate()

  useEffect(() => {
    if (!state.tasks[0]) {
      return navigate('/all')
    }
  }, [])

  const ContextState: ContextState = {
    state,
    changeState
  }

  return (
    <ContextApp.Provider value={ContextState}>
      <div className={styles.app}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>todos</h2>
        </div>
        <div className={styles.flexbox}>
          <div className={styles.wrapper__app}>
            <NewTask />
            <Routes>
              <Route path='' element={<AllTask />} />
              <Route path='*' element={<AllTask />} />
              <Route path='/' element={<AllTask />} />
              <Route path='/all' element={<AllTask />} />
              <Route path='/active' element={<ActiveTask />} />
              <Route path='/completed' element={<CompletedTask />} />
            </Routes>
            <Navbar />
          </div>
        </div>
      </div>
    </ContextApp.Provider>
  );
}

const TodosApp = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default TodosApp;