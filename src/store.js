import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todosReducer from './todoSlice';

const reducer = combineReducers({
    todos: todosReducer,
})

const store = configureStore({
    reducer,
});

export default store;