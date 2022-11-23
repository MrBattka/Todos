import React from "react";
import { useNavigate } from "react-router-dom";
import ActiveTask from "../AllTasks/ActiveTask/ActiveTask";
import styles from "./InputTask.module.css"
import { Route, Routes } from 'react-router-dom';
import AllTask from "../AllTasks/AllTask";
import CompletedTask from "../AllTasks/CompletedTask/CompletedTask";
import { TaskType } from "../redux/input-reduser";

type PropsType = {
    tasks: Array<TaskType> | any
    newTaskText: string
    addTask: (newTaskText: string) => void
    updateNewText: (text: string) => void
}

const InputTask: React.FC<PropsType> = ({newTaskText, addTask, updateNewText, tasks}) => {
    
    let sendInput: any = React.createRef<HTMLInputElement>();

    const navigate = useNavigate()
    
    const newInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        let text = sendInput.current.value
        updateNewText(text)
    }
    const onAddTask = (e: React.MouseEvent<Element, MouseEvent>) => {
        e.preventDefault()
        let text = sendInput.current.value
        navigate('/active')
        addTask(text)
        text = ""
    }
    let taskElement = tasks.map( p => <ActiveTask tasks={p.task} /> );
    return (
        <div>
            <form>
                <input ref={ sendInput } onChange={newInputText} type='input' 
                       value={newTaskText} placeholder="What needs to be done?" />
                <button className={styles.btnSubmit} onClick={onAddTask} type="submit"></button>
            </form>
            <div>{taskElement}</div>
        </div>
    )
}

export default InputTask