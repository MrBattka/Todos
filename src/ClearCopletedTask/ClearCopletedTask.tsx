import { useCallback, useContext, useState } from 'react';
import styles from '../Navbar/Navbar.module.css';
import { ActionType } from '../state/ContextTypes';
import { ContextApp } from '../state/task-reduser';

const ClearCopletedTask = () => {
    const { changeState = () => { } } = useContext(ContextApp);
    const [task] = useState('')

    const clearCompletedTask = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault()
            changeState({ type: ActionType.REMOVE, payload: task })
        }, [task, changeState]
    )

    return (
        <div className={styles.clear__completed}>
            <button data-testid="clear-completed" onClick={clearCompletedTask}> Clear completed</button>
        </div>
    )
}

export default ClearCopletedTask