import React, { useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ActiveTask from './AllTasks/ActiveTask/ActiveTask';
import AllTask from './AllTasks/AllTask';
import CompletedTask from './AllTasks/CompletedTask/CompletedTask';
import styles from './App.module.css';
import Navbar from './Footer/Footer';
import NewTask from './NewTask/NewTask';
import { Action, ContextState, State } from "./state/ContextTypes";
import todoReducer, { ContextApp, initialState } from './state/task-reduser';

const App: React.FC = () => {
  const [state, changeState] = useReducer<React.Reducer<State, Action>>(todoReducer, initialState);

  const ContextState: ContextState = {
    state,
    changeState
  };
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
