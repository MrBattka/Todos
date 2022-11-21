import React from "react";
import { NavLink } from 'react-router-dom';
// import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <div>
                <NavLink to='/all'>All</NavLink>
            </div>
            <div>
                <NavLink to="/active">Active</NavLink>
            </div>
            <div>
                <NavLink to="/completed">Completed</NavLink>
            </div>
        </nav>
    )
}

export default Navbar