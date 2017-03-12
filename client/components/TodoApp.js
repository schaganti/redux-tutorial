import React from 'react';
import ReactDOM from 'react-dom';
import {store} from '../reducer/todoAppReducer';
import {Todo} from './todo';
import {TodoInput} from './todoInput';
import {FooterComponent} from './FooterComponent';
import {VisibleTodoList} from './VisibleTodoList';
import {Provider} from 'react-redux';

const TodoApp = () => {
    return (
        <div>

            <TodoInput/>
            <VisibleTodoList/>
            <FooterComponent/>

        </div>
    )
}

ReactDOM.render(
    <Provider store={store}><TodoApp/></Provider>, document.getElementById('root'));
