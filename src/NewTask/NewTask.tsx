import { Button, TextField } from '@mui/material';
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
                <div className={styles.input__ui}>
                    <TextField data-testid="input" onChange={(event) => setText(event.target.value)} value={text}
                        label="What needs to be done?"
                        variant="outlined" size="small" id="fullWidth" />
                    <Button data-testid="new-task" variant="outlined" size="large" type='submit'>New task</Button>
                </div>
            </form>
        </div>
    )
}

export default InputTask