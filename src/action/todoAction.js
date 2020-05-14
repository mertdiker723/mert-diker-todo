import { ADD_TODO_SUCCESS, LOAD_TODO_SUCCESS,DELETE_TODO_SUCCESS } from "./action-type";

export const addTodoAction = (newTodo) => {
    return {
        type: ADD_TODO_SUCCESS,
        payload: newTodo
    }
}

export const loadTodoAction = (loadTodo) => {
    return {
        type: LOAD_TODO_SUCCESS,
        payload: []
    }
}

export const deleteTodoAction = (id) => {
    return {
        type: DELETE_TODO_SUCCESS,
        id
    }
}