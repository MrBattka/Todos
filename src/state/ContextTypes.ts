import { Dispatch } from "react";

export type Task = {
    name: string;
    isDone: boolean
}

export type Tasks = Task[];

export type State = {
    newTask: string;
    tasks: Tasks
    isDone: boolean
}

export const defaultState: State = {
    newTask: '',
    tasks: [],
    isDone: false
}

export enum ActionType {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
    TOGGLE = 'TOGGLE'
}

export type ActionStringPayload = {
    type: ActionType.ADD
    payload: string 
}

export type ActionObjectPayload = {
    type: ActionType.TOGGLE | ActionType.REMOVE,
    payload: Task 
}

export type Action = ActionStringPayload | ActionObjectPayload;

export type ContextState = {
    state: State;
    changeState: Dispatch<Action>
}