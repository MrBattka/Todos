import { useReducer } from "react";
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
    <>
      <ContextApp.Provider value={ContextState}>
        <div className={styles.app}>
          <div className={styles.wrapperApp}>
            <NewTask />
            <Navbar />
          </div>
        </div>
      </ContextApp.Provider>
    </>
  );
}

export default App;
