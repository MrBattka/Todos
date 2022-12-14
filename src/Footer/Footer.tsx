import ClearCompletedTask from "../ClearCompletedTask/ClearCompletedTask";
import CounterTask from "../CounterTask/CounterTask";
import styles from './Footer.module.css';
import Navbar from "./Navbar/Navbar";

const Footer: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.counter__item}>
                <CounterTask />
            </div>
            <Navbar />
            <ClearCompletedTask />
        </div>
    )
}

export default Footer