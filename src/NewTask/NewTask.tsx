import * as React from 'react';
import { useCallback, useContext, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import ActiveTask from '../AllTasks/ActiveTask/ActiveTask';
import AllTask from '../AllTasks/AllTask';
import CompletedTask from '../AllTasks/CompletedTask/CompletedTask';
import { ActionType } from "../state/ContextTypes";
import { ContextApp } from "../state/task-reduser";
import styles from './NewTask.module.css'

const InputTask: React.FC = () => {
    const { changeState } = useContext(ContextApp);

    const [text, setText] = useState('')

    const setTask = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            if (text && changeState) {
                changeState({ type: ActionType.ADD, payload: text })
                setText('')
            }        
        },
        [text, changeState]
    )

    return (
        <div className={styles.wrapper}>
            <form onSubmit={(event) => setTask(event)}>
                <input onChange={(event) => setText(event.target.value)} type='text'
                    value={text} placeholder="What needs to be done?" />
            </form>
            <div>
                <Routes>
                    <Route path='' element={<AllTask />} />
                    <Route path='/' element={<AllTask />} />
                    <Route path='/all' element={<AllTask />} />
                    <Route path='/active' element={<ActiveTask />} />
                    <Route path='/completed' element={<CompletedTask />} />
                </Routes>
            </div>
        </div>
    )
}

export default InputTask