import { useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ActionType, defaultState, Task } from '../../state/ContextTypes';
import { ContextApp } from "../../state/task-reduser";
import styles from '../AllTask.module.css';

const CompletedTask = () => {
    const { state = defaultState, changeState = () => { } } = useContext(ContextApp);
    const toggleTask = useCallback(
        (taskToggle: Task) => {
            changeState({ type: ActionType.TOGGLE, payload: taskToggle })
        }, [changeState]
    )
    const navigate = useNavigate()
    if (state.newTask) {
        navigate("/all")
    }

    return (
        <div className={styles.wrapper}>
            {state.tasks.map((task, i) => (
                !task.isDone ? null : <ul key={i}>
                    <li className={styles.flexbox}>
                        <label className={task.isDone ? styles.ready : undefined}>
                            <input type="checkbox" onChange={() => toggleTask(task)} checked={task.isDone} />
                            <span className={task.isDone ? styles.ready : styles.select}>&#10003;</span>
                        </label>
                        <div className={styles.wrapper__text}>
                            <p className={styles.task__text}>{task.taskText}</p>
                        </div>
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default CompletedTask