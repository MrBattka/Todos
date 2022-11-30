import * as React from 'react';
import { useContext } from "react";
import { ActionType, defaultState, Task } from "../state/ContextTypes";
import { ContextApp } from "../state/task-reduser";
import styles from './AllTask.module.css';

const AllTask: React.FC = () => {

    const { state = defaultState, changeState = () => [] } = useContext(ContextApp);

    const toggleTask = (taskForChange: Task) => {
        changeState({ type: ActionType.TOGGLE, payload: taskForChange })
    }
    const removeTask = (taskForRemoving: Task) => {
        changeState({ type: ActionType.REMOVE, payload: taskForRemoving })
    }

    return (
        <div className={styles.wrapper}>
            {state.tasks.map((task, i) => (
                <ul key={i}>
                    <div>
                        <li className={styles.flexbox}>
                            <label className={task.isDone ? styles.ready : undefined}>
                                <input type="checkbox" onChange={() => toggleTask(task)} checked={task.isDone} />
                                <span className={task.isDone ? styles.ready : styles.select}>&#10003;</span>
                            </label>
                            <div className={styles.wrapper__text}>
                                <p className={styles.task__text}>{task.taskText}</p>
                            </div>
                            <div className={styles.wrapper__btn}>
                                <button className={styles.remove__button} onClick={() => removeTask(task)}>
                                    X
                                </button>
                            </div>
                        </li>
                    </div>
                </ul>
            ))}
        </div>
    )
}

export default AllTask