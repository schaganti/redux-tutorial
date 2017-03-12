import React from 'react';
import {store} from '../reducer/todoAppReducer';

let nextId = 1;
export const TodoInput = ({addTodo}) => {
    let input;
    return (
        <div>
            <input ref={node => {
                input = node;
            }}></input>
            <button onClick={() => {
                store.dispatch({
                    type: 'ADD_TODO',
                    text: input.value,
                    id: nextId++
                });
                input.value = '';
            }}>Add Todo</button>
        </div>
    );
}
