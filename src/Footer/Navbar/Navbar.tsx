import { NavLink } from "react-router-dom"
import styles from "../Footer.module.css"

const Navbar: React.FC = () => {
    return(
        <nav className={styles.nav}>
                <div className={styles.wrapper__nav}>
                    <NavLink end className={navData => navData.isActive ? styles.active : styles.item}
                        to='/Todos/all'>All</NavLink>
                </div>
                <div>
                    <NavLink className={navData => navData.isActive ? styles.active : styles.item}
                        to="/Todos/active">Active</NavLink>
                </div>
                <div>
                    <NavLink className={navData => navData.isActive ? styles.active : styles.item}
                        to="/Todos/completed">Completed</NavLink>
                </div>
            </nav>
    )
}

export default Navbar