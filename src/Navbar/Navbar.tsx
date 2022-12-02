import React from "react";
import { NavLink } from 'react-router-dom';
import CounterTask from "../CounterTask/CounterTask";
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.counter__item}>
                <CounterTask />
            </div>
            <nav className={styles.nav}>
                <div className={styles.wrapper__nav}>
                    <NavLink className={navData => navData.isActive ? styles.active : styles.item}
                        to='/all'>All</NavLink>
                </div>
                <div>
                    <NavLink className={navData => navData.isActive ? styles.active : styles.item}
                        to="/active">Active</NavLink>
                </div>
                <div>
                    <NavLink className={navData => navData.isActive ? styles.active : styles.item}
                        to="/completed">Completed</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar