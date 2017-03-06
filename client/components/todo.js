import React from 'react';

export const Todo = ({
  todo,
  onClick
}) => (<li key={todo.id} onClick={onClick} style={{
        textDecoration: todo.completed
            ? 'line-through'
            : 'none'
    }}>{todo.text}</li>);
