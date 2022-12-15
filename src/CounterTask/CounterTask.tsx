import React from "react";
import { useContext } from "react";
import { defaultState } from "../state/ContextTypes";
import { ContextApp } from "../state/task-reduser";
import styles from "../Footer/Footer.module.css"

const CounterTask: React.FC = () => {
    const { state = defaultState } = useContext(ContextApp);
    const taskActiveCounter = state.tasks.map(t => t.isDone).filter(t => t === false)
    
    return (
        <div className={styles.counter__item}>
            <p data-testid="counter-task">{taskActiveCounter.length} items left</p>
        </div>
    )
}

export default CounterTask