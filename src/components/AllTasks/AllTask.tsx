import { Checkbox, FormControlLabel } from '@mui/material';
import * as React from 'react';
import { useCallback, useContext } from "react";
import { ActionType, defaultState, Task } from "../../state/ContextTypes";
import { ContextApp } from "../../state/task-reduser";
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
                                <FormControlLabel
                                    control={
                                        <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }}
                                            data-testid="completed-task" onChange={() => toggleTask(task)} checked={task.isDone} />
                                    }
                                    label="The task has changed" />
                                <div className={styles.wrapper__text}>
                                    <p data-testid="new-text" className={task.isDone ? styles.task__text__cmpltd : styles.task__text}>
                                        {task.taskText}
                                    </p>
                                </div>
                            </li>
                        </div>
                    </ul>
                ))}
        </div>
    )
}

export default AllTask