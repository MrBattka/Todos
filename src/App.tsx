import styles from './App.module.css';
import Navbar from './Navbar/Navbar';
import InputTaskCont from './InputTask/InputTaskCont';
import { Route, Routes } from 'react-router-dom';
import AllTask from './AllTasks/AllTask';
import ActiveTask from './AllTasks/ActiveTask/ActiveTask';
import CompletedTask from './AllTasks/CompletedTask/CompletedTask';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.wrapperApp}>
        <InputTaskCont />
        <div>
          <Routes>
            <Route path='' element={<AllTask />} />
            <Route path='/' element={<AllTask />} />
            <Route path='/all' element={<AllTask />} />
            <Route path='/active' element={<ActiveTask />} />
            <Route path='/completed' element={<CompletedTask />} />
          </Routes>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
