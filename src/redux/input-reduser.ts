const NEW_TASK_MESSAGE = "NEW_TASK_MESSAGE"
const UPDATE_NEW_TEXT = "UPDATE_NEW_TEXT"

export type TaskType = {
    task: string
}

type InitialStateType = {
    tasks: Array<TaskType>
    newTaskText: string
}

let initialState: InitialStateType = {
    tasks: [],
    newTaskText: ''
}

const inputReduser = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case NEW_TASK_MESSAGE:
            let body = action.newTaskText
            return {
                ...state,
                tasks: [...state.tasks, {task: body}],
            }
        case UPDATE_NEW_TEXT:
            return {
                ...state, newTaskText: action.newText
            }
        default:
            return state
    }
}

export type addTaskType = {
    type: typeof NEW_TASK_MESSAGE
    newTaskText: string
}
export const addTask = (newTaskText: string): addTaskType => ({ type: NEW_TASK_MESSAGE, newTaskText })

export const updateNewText = (text: string) => ({ type: UPDATE_NEW_TEXT, newText: text })

export default inputReduser