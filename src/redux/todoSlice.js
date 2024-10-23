import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        removeTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        toggleComplete: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        editTodo: (state, action) => {
            const { id, title, description, priority } = action.payload;
            const todo = state.find(todo => todo.id === id);
            if (todo) {
                todo.title = title;
                todo.description = description;
                todo.priority = priority;
            }
        },
    },
});

export const { addTodo, removeTodo, toggleComplete, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
