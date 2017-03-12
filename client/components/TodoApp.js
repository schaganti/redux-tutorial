import React from 'react';
import ReactDOM from 'react-dom';
import {store} from '../reducer/todoAppReducer';
import {Todo} from './todo';
import {TodoInput} from './todoInput';
import {FilterComponent} from './FilterComponent';
import {TodoList} from './TodoList';

let nextId = 1;

const TodoApp = ({todos, visibilityFilter}) => {
    return (
        <div>

            <TodoInput addTodo={(inputValue) => {
                store.dispatch({
                    type: 'ADD_TODO',
                    text: inputValue,
                    id: nextId++
                });
            }}/>

            <FilterComponent visibilityFilter={visibilityFilter} filter={(filter) => {
                store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: filter})
            }}/>

            <TodoList todos={todos} visibilityFilter={visibilityFilter} toggleTodo={(todo) => {
                store.dispatch({type: 'TOGGLE_TODO', id: todo.id});
            }}/>
        </div>
    )
}

const render = () => {
    ReactDOM.render(
        <TodoApp {...store.getState()}/>, document.getElementById('root'));
};

store.subscribe(render);
render();
