import React from 'react';
import {Todo} from './todo';

export const TodoList = ({todoList, toggleTodo}) => {
    return (
        <ul>
            {todoList.map(todo => <Todo key={todo.id} todo={todo} onClick={() => {
                toggleTodo(todo)
            }}/>)}
        </ul>
    );
}
