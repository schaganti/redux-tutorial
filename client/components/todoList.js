import React from 'react';
import {Todo} from './todo';

export const TodoList = ({todos, toggleTodo}) => {
  return (
    <ul>
      {todos.map(todo => <Todo key={todo.id} todo={todo} onClick={toggleTodo}/>)}
    </ul>
  );
}
