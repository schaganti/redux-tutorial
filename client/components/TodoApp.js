import React from 'react';
import ReactDOM from 'react-dom';
import {store} from '../reducer/todoAppReducer';
import {Todo} from './todo';
import {TodoInput} from './todoInput';
import {FooterComponent} from './FooterComponent';
import {VisibleTodoList} from './VisibleTodoList';

const TodoApp = () => {
    return (
        <div>
            <TodoInput/>

            <VisibleTodoList/>

            <FooterComponent/>
        </div>
    )
}

const render = () => {
    ReactDOM.render(
        <TodoApp {...store.getState()}/>, document.getElementById('root'));
};

store.subscribe(render);
render();
