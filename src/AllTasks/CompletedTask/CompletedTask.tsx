import { useCallback, useContext } from "react";
import { ActionType, defaultState, Task } from '../../state/ContextTypes';
import { ContextApp } from "../../state/task-reduser";
import styles from '../AllTask.module.css';
import { Checkbox } from '@mui/material';

const CompletedTask: React.FC = () => {
    const { state = defaultState, changeState = () => { } } = useContext(ContextApp);

    const taskCompletedCounter = state.tasks.map(t => t.isDone).filter(t => t === true)

    const toggleTask = useCallback(
        (taskToggle: Task) => {
            changeState({ type: ActionType.TOGGLE, payload: taskToggle })
        }, [changeState]
    )

    return (
        <div className={styles.wrapper}>
            {!taskCompletedCounter[0] ?

                <p className={styles.tasks__empty}>The list of completed tasks is empty</p> :

                state.tasks.map((task, i) => (
                    !task.isDone ? null : <ul key={i}>
                        <li className={styles.flexbox}>
                            <label className={task.isDone ? styles.ready : undefined}>
                                <Checkbox onChange={() => toggleTask(task)} checked={task.isDone} />
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