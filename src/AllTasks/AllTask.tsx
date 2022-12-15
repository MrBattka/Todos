import { Checkbox } from '@mui/material';
import * as React from 'react';
import { useCallback, useContext } from "react";
import { ActionType, defaultState, Task } from "../state/ContextTypes";
import { ContextApp } from "../state/task-reduser";
import styles from './AllTask.module.css';

const AllTask: React.FC = () => {
    const { state = defaultState, changeState = () => { } } = useContext(ContextApp)
    const toggleTask = useCallback(
        (taskForChange: Task) => {
            changeState({ type: ActionType.TOGGLE, payload: taskForChange })
        }, [changeState]
    )

    return (
        <div className={styles.wrapper}>
            {!state.tasks.length ?

                <p className={styles.tasks__empty}>The task list is empty</p> :

                state.tasks.map((task, i) => (
                    <ul key={i}>
                        <div>
                            <li className={styles.flexbox}>
                                <label>
                                    <Checkbox onChange={() => toggleTask(task)} checked={task.isDone} />
                                </label>
                                <div className={styles.wrapper__text}>
                                    <p data-testid="new-text" className={styles.task__text}>{task.taskText}</p>
                                </div>
                            </li>
                        </div>
                    </ul>
                ))}
        </div>
    )
}

export default AllTask