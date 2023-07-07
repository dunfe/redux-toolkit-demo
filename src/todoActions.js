import { createAction } from "@reduxjs/toolkit"

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        payload: { text },
    }
}

export const addTodoAction = createAction('ADD_TODO')