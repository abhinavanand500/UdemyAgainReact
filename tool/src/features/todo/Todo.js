import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { create, edit, toggleComplete, remove } from "./TodoSlice";
const Todo = () => {
    const todos = useSelector((state) => state.todos);
    const [inputText, setInputText] = useState("");
    const [editText, setEditText] = useState("");
    const [isEditing, setIsEditing] = useState(-1);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(create(inputText));
        setInputText("");
    };
    const handleDelete = (id) => () => {
        dispatch(remove(id));
    };
    const handleToggle = (id) => () => {
        dispatch(toggleComplete(id));
    };
    const handleEdit = (id, description) => () => {
        setIsEditing(id);
        setEditText(description);
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(edit({ id: isEditing, description: editText }));
        setIsEditing(-1);
        setEditText("");
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setInputText(e.target.value)}
                    value={inputText}
                />
                <button type='submit'>Create New</button>
            </form>
            {todos.map((todo) => (
                <div key={todo.id}>
                    {isEditing === todo.id ? (
                        <form onSubmit={handleUpdate}>
                            <input
                                onChange={(e) => setEditText(e.target.value)}
                                value={editText}
                            />
                            <button type='submit'>Update</button>
                        </form>
                    ) : (
                        <>
                            {todo.description} {todo.isCompleted ? "Done" : ""}
                            <button onClick={handleDelete(todo.id)}>
                                Delete
                            </button>
                            <button onClick={handleToggle(todo.id)}>
                                Toggle
                            </button>
                            <button
                                onClick={handleEdit(todo.id, todo.description)}>
                                Edit
                            </button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Todo;
