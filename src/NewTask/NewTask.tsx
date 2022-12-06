import * as React from 'react';
import { useCallback, useContext, useState } from "react";
import { ActionType } from "../state/ContextTypes";
import { ContextApp } from "../state/task-reduser";
import styles from './NewTask.module.css';

const InputTask: React.FC = () => {
    const { changeState } = useContext(ContextApp);
    const [text, setText] = useState('')
    
    const createTask = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            if (text && changeState) {
                changeState({ type: ActionType.ADD, payload: text })
                setText('')
            }        
        }, [text, changeState]
    )

    return (
        <div className={styles.wrapper}>
            <form onSubmit={createTask}>
                <input data-testid="input" onChange={(event) => setText(event.target.value)} type='text'
                    value={text} placeholder="What needs to be done?" />
                <button data-testid="new-task" type='submit'>New task</button>
            </form>
        </div>
    )
}

export default InputTask