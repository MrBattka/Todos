import React from "react";
import { TaskType } from "../../redux/input-reduser";

type PropTypes = {
    tasks: any
}

const ActiveTask: React.FC<PropTypes> = ({tasks}) => {
    if (!tasks) {
       return tasks
    }
    return (
        <div>
            <p>{tasks}</p>
        </div>
    )
}

export default ActiveTask