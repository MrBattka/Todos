import AllTask from './AllTasks/AllTask';
import styles from './App.module.css';
import InputTask from './InputTask/InputTask';
import Navbar from './Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import ActiveTask from './AllTasks/ActiveTask/ActiveTask';
import CompletedTask from './AllTasks/CompletedTask/CompletedTask';


const App = () => {

  return (
    <div className={styles.app}>
      <div className={styles.wrapperApp}>
        <InputTask />
        <div>
          <Routes>
            <Route path='' element={<AllTask />} />
            <Route path='/' element={<AllTask />} />
            <Route path='/all/*' element={<AllTask />} />
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
