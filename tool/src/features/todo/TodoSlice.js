import { createSlice } from "@reduxjs/toolkit";
let todoId = 1;
export const slice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        create: (state, action) => {
            const { payload } = action;
            state.push({
                id: todoId,
                description: payload,
                isCompleted: false,
            });
            todoId++;
        },
    },
});
