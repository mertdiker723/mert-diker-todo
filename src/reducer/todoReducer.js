import { ADD_TODO_SUCCESS, LOAD_TODO_SUCCESS, DELETE_TODO_SUCCESS } from "../action/action-type";

export default function todoReducer(state = [], action) {    
    switch (action.type) {
        case ADD_TODO_SUCCESS:
            return [...state, action.payload];
        case LOAD_TODO_SUCCESS:
            return action.payload;
        case DELETE_TODO_SUCCESS:            
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}