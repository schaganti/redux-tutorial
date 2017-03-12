import React from 'react';

export const Todo = ({todo, onClick}) => (
    <li key={todo.id} onClick={(e) => {
        onClick(todo)
    }} style={{
        textDecoration: todo.completed
            ? 'line-through'
            : 'none'
    }}>{todo.text}</li>
);
