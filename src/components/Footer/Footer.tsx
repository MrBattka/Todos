import ClearCompletedTask from "../ClearCompletedTask/ClearCompletedTask";
import CounterTask from "../CounterTask/CounterTask";
import styles from './Footer.module.css';
import Navbar from "../Footer/Navbar/Navbar";

const Footer: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <CounterTask />
            <Navbar />
            <ClearCompletedTask />
        </div>
    )
}

export default Footer