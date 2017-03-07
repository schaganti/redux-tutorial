import React from 'react';
import ReactDOM from 'react-dom';
import {store} from '../reducer/todoAppReducer';
import {Todo} from './todo';
import {TodoInput} from './todoInput';
import {FilterComponent} from './FilterComponent';
import {TodoList} from './TodoList';

let nextId = 1;

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
    return store.getState().todos;
};

const TodoApp = React.createClass({
    render: function() {

        const {todos, visibilityFilter} = this.props;
        const filteredTodoList = filteredTodos(todos, visibilityFilter);

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
                    store.dispatch({type: 'SET_VISIBILITY_FILTER', filter:filter})
                }}/>

                <TodoList todos={filteredTodoList} toggleTodo={(todo) => {store.dispatch({type: 'TOGGLE_TODO', id: todo.id});}}/>

            </div>
        )
    }
});

const render = () => {
    ReactDOM.render(
        <TodoApp {...store.getState()}/>, document.getElementById('root'));
};

store.subscribe(render);
render();
