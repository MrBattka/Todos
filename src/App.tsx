import React, { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css';
import Navbar from './Navbar/Navbar';
import NewTask from './NewTask/NewTask';
import { Action, ContextState, State } from "./state/ContextTypes";
import todoReducer, { ContextApp, initialState } from './state/task-reduser';


const App = () => {
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
