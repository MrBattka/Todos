import * as React from 'react';
import { useContext } from "react";
import { ActionType, defaultState, Task } from "../state/ContextTypes";
import { ContextApp } from "../state/task-reduser";
import styles from './AllTask.module.css';

const AllTask: React.FC = () => {

    const { state = defaultState, changeState = () => [] } = useContext(ContextApp);

    const Toggle = (task : Task) => {
        if (changeState) {
            changeState({ type: ActionType.TOGGLE, payload: task })
        }
    }
    const removeTask = (taskForRemoving: Task) => {
        changeState({ type: ActionType.REMOVE, payload: taskForRemoving })
    }

    return (
        <div>
            <ul>
                {state.tasks.map((task, i) => (
                    <li key={i} className={task.isDone ? styles.ready : undefined}>
                        <label>
                            <input type="checkbox" onChange={() => Toggle(task)} checked={task.isDone} />
                        </label>
                        <div className="task-name">
                            {task.name}
                        </div>
                        <button className='remove-button' onClick={() => removeTask(task)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllTask