import React from 'react';
import {Component} from 'react';
import {TodoList} from './todoList';
import {connect} from 'react-redux';
import {toogleTodo} from '../actions/actionCreators';

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

const mapStateToProps = (state) => {
    return ({
        todoList: filteredTodos(state.todos, state.visibilityFilter)
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        toggleTodo: (todo) => {
            dispatch(toogleTodo(todo.id));
        }
    });
}

export const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
