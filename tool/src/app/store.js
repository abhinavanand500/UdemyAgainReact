import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import TodoReducer from "../features/todo/TodoSlice";
export default configureStore({
    reducer: {
        counter: counterReducer,
        todos: TodoReducer,
    },
});
