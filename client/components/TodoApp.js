import React from 'react';
import ReactDOM from 'react-dom';
import {store} from '../reducer/todoAppReducer';
import {Todo} from './todo';
import {TodoInput} from './todoInput';
import {FooterComponent} from './FooterComponent';
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

            <TodoList todos={todos} visibilityFilter={visibilityFilter} toggleTodo={(todo) => {
                store.dispatch({type: 'TOGGLE_TODO', id: todo.id});
            }}/>

            <FooterComponent />
        </div>
    )
}

const render = () => {
    ReactDOM.render(
        <TodoApp {...store.getState()}/>, document.getElementById('root'));
};

store.subscribe(render);
render();
