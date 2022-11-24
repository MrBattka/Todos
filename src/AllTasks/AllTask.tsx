import * as React from 'react';
import {ActionType, Task} from "../state/stateTypes";
import { useContext } from "react";
import { ContextApp } from "../state/task-reduser";
import styles from './AllTask.module.css'

const AllTask: React.FC = () => {
    const { state, changeState } = useContext(ContextApp);
    const toggleReadiness = (taskForChange: Task) => {
        changeState({ type: ActionType.TOGGLE, payload: taskForChange })
    }
    const removeTask = (taskForRemoving: Task) => {
        changeState({type: ActionType.REMOVE, payload: taskForRemoving})
    }
    
    return (
        <div>
            <ul>
                {state.tasks.map((task, i) => (
                    <li key={i} className={task.isDone ? styles.ready : null}>
                        <label>
                            <input type="checkbox" onChange={()=>toggleReadiness(task)} checked={task.isDone}/>
                        </label>
                        <div className="task-name">
                            {task.name}
                        </div>
                        <button className='remove-button' onClick={()=>removeTask(task)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllTask