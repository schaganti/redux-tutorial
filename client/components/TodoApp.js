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
            <TodoInput store={store}/>

            <VisibleTodoList store={store}/>

            <FooterComponent store={store}/>
        </div>
    )
}

ReactDOM.render(
    <TodoApp store={store}/>, document.getElementById('root'));
