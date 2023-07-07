import { createSlice } from "@reduxjs/toolkit";

const initialState = ['todo 1', 'todo 2'];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            return [...state, action.payload]
        },
    }
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions
export const selectTodos = state => state.todos
export default todoSlice.reducer
