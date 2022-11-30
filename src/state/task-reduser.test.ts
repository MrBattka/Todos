import { ActionObjectPayload, ActionStringPayload, ActionType } from "./ContextTypes";
import todoReducer from './task-reduser';

let state: any = {
    tasks: [
        {taskText: '', isDone: false}
    ]
}

it('add new task', () => {
    let action: ActionStringPayload = ({ type: ActionType.ADD, payload: state.tasks })
    let newState = todoReducer(state, action)
    expect(newState.tasks.length).toBe(2)
})

it('add new name task', () => {
    let action: ActionStringPayload = ({ type: ActionType.ADD, payload: state.tasks[0].taskText = 'test' })
    let newState =  todoReducer(state, action) 
    expect(newState.tasks[0].taskText).toBe('test')
}) 

it('delete task', () => {
    let action: ActionObjectPayload = ({ type: ActionType.REMOVE, payload: state.tasks[0] }) 
    let newState = todoReducer(state, action)
    expect(newState.tasks.length).toBe(0)
})

it(`don't delete`, () => {
    let action: ActionObjectPayload = ({ type: ActionType.REMOVE, payload: state.tasks[10] })
    let newState = todoReducer(state, action)
    expect(newState.tasks.length).toBe(1)
})

it('change checkbox', () => {
    let action: ActionObjectPayload = ({ type: ActionType.TOGGLE, payload: state.tasks[0].isDone = true })
    let newState = todoReducer(state, action)
    expect(newState.tasks[0].isDone).toBe(true)
})