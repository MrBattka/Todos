import * as React from 'react'
import { useContext, useCallback, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ActionType, defaultState, Task } from '../../state/ContextTypes';
import { ContextApp } from "../../state/task-reduser";
import styles from '../AllTask.module.css'

const ActiveTask: React.FC = () => {
    const { state = defaultState, changeState = () => { } } = useContext(ContextApp);
    const navigate = useNavigate()

    const taskActiveCounter = state.tasks.map(t => t.isDone).filter(t => t === false)
    useEffect(() => {
        if (!taskActiveCounter.length) {
            navigate("/Todos/all")
        }
    })

    const toggleTask = useCallback(
        (taskForChange: Task) => {
            changeState({ type: ActionType.TOGGLE, payload: taskForChange })
        }, [changeState]
    )

    return (
        <div className={styles.wrapper}>
            {state.tasks.map((task, i) => (
                task.isDone ? null : <ul key={i}>
                    <li data-testid="active-task" className={styles.flexbox}>
                        <label className={task.isDone ? styles.ready : undefined}>
                            <input type="checkbox" onChange={() => toggleTask(task)} checked={task.isDone} />
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

export default ActiveTask