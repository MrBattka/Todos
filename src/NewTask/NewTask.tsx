import * as React from 'react';
import { useContext } from "react";
import { TypeProps } from "./NewTaskType";
import { ActionType } from "../state/stateTypes";
import { ContextApp } from "../state/task-reduser";
import { Route, Routes } from 'react-router-dom';
import AllTask from '../AllTasks/AllTask';
import ActiveTask from '../AllTasks/ActiveTask/ActiveTask';
import CompletedTask from '../AllTasks/CompletedTask/CompletedTask';
import styles from './NewTask.module.css'

const InputTask: React.FC = () => {
    const { state, changeState } = useContext(ContextApp);

    const addTask = (event: React.FormEvent<HTMLFormElement>, task: TypeProps) => {
        event.preventDefault();
        if (state?.newTask) {
            changeState({ type: ActionType.ADD, payload: task })
            changeState({ type: ActionType.CHANGE, payload: '' })
        }
    }

    const changeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeState({ type: ActionType.CHANGE, payload: event.target.value })
    }

    return (
        <div>
            <form onSubmit={(event) => addTask(event, state.newTask)}>
                <input onChange={(event) => changeTask(event)} type='text'
                    value={state?.newTask} placeholder="What needs to be done?" />
                <button type="submit" className={styles.btnSubmit}></button>
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