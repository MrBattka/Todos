import React from "react";
import { useContext } from "react";
import { defaultState } from "../state/ContextTypes";
import { ContextApp } from "../state/task-reduser";

const CounterTask = () => {
    const { state = defaultState } = useContext(ContextApp);
    const itemCounter = state.tasks.map(t => t.isDone).filter(t => t === false)
    
    return (
        <div>
            <p data-testid="counter-task">{itemCounter.length} items left</p>
        </div>
    )
}

export default CounterTask