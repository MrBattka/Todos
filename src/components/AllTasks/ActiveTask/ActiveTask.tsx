import * as React from 'react';
import { useCallback, useContext } from "react";
import { ActionType, defaultState, Task } from '../../../state/ContextTypes';
import { ContextApp } from "../../../state/task-reduser";
import styles from '../AllTask.module.css';
import { Checkbox, FormControlLabel } from '@mui/material';

const ActiveTask: React.FC = () => {
    const { state = defaultState, changeState = () => { } } = useContext(ContextApp);

    const taskActiveCounter = state.tasks.map(t => t.isDone).filter(t => t === false)

    const toggleTask = useCallback(
        (taskForChange: Task) => {
            changeState({ type: ActionType.TOGGLE, payload: taskForChange })
        }, [changeState]
    )

    return (
        <div className={styles.wrapper}>
            {taskActiveCounter.indexOf(true) && taskActiveCounter.length < 1 ?

                <p className={styles.tasks__empty}>The list of active tasks is empty</p> :

                state.tasks.map((task, i) => (
                    task.isDone ? null : <ul key={i}>
                        <li data-testid="active-task" className={styles.flexbox}>
                            <FormControlLabel
                                control={
                                    <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }}
                                        data-testid="completed-task" onChange={() => toggleTask(task)}
                                        checked={task.isDone} />
                                }
                                label="The task has changed" />
                            <div className={styles.wrapper__text}>
                                <p className={styles.task__text}>{task.taskText}</p>
                            </div>
                        </li>
                    </ul>
                ))}
        </div>
    )
}

export default ActiveTask