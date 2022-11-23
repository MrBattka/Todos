import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <div>
                <NavLink className={ navData => navData.isActive ? styles.active : styles.item }
                    to='/all'>All</NavLink>
            </div>
            <div>
                <NavLink className={ navData => navData.isActive ? styles.active : styles.item }
                    to="/active">Active</NavLink>
            </div>
            <div>
                <NavLink className={ navData => navData.isActive ? styles.active : styles.item }
                    to="/completed">Completed</NavLink>
            </div>
        </nav>
    )
}

export default Navbar