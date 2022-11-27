import * as React from 'react'
import { useContext } from "react";
import { ActionType, defaultState, Task } from '../../state/ContextTypes';
import { ContextApp } from "../../state/task-reduser";

const ActiveTask: React.FC = () => {
    const { state = defaultState, changeState = () => {} } = useContext(ContextApp);
    const toggleReadiness = (taskForChange: Task) => {
        changeState({ type: ActionType.TOGGLE, payload: taskForChange })
    }
    const removeTask = (taskForRemoving: Task) => {
        changeState({ type: ActionType.REMOVE, payload: taskForRemoving })
    }

    return (
        <>
            {state?.isDone ? null : <div>
                <ul>
                    {state.tasks.map((task, i) => (
                        <li key={i}>
                            <label>
                                <input type="checkbox" onChange={() => toggleReadiness(task)} checked={task.isDone} />
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
            </div>}
        </>
    )
}

export default ActiveTask