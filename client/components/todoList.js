import React from 'react';
import {Todo} from './todo';

const filteredTodos = (todos, filter) => {
    if (filter === 'SHOW_ALL') {
        return todos;
    }
    if (filter === 'SHOW_ACTIVE') {
        return todos.filter(todo => {
            return todo.completed !== true
        });
    }
    if (filter === 'SHOW_COMPLETED') {
        return todos.filter(todo => {
            return todo.completed === true
        });
    }
    return todos;
};

export const TodoList = ({todos, toggleTodo, visibilityFilter}) => {
    const filteredTodoList = filteredTodos(todos, visibilityFilter);
    return (
        <ul>
            {filteredTodoList.map(todo => <Todo key={todo.id} todo={todo} onClick={toggleTodo}/>)}
        </ul>
    );
}
