import React from 'react';
import {Component} from 'react';
import {TodoList} from './todoList';

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

export class VisibleTodoList extends Component {

    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe(() => {
            this.forceUpdate()
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const store = this.props.store;
        const filteredTodoList = filteredTodos(store.getState().todos, store.getState().visibilityFilter);
        return (<TodoList todoList ={filteredTodoList} toggleTodo={(todo) => {
            store.dispatch({type: 'TOGGLE_TODO', id: todo.id});
        }}/>);
    }

}
